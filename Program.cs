using FluentValidation;
using CollectiveComments.DTO;
using CollectiveComments.Models;
using CollectiveComments;
using CollectiveComments.Validators;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

// Configurar a conexão com o banco de dados PostgreSQL
var connectionString = builder.Configuration["DATABASE"];
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(connectionString));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<AppDbContext>();
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
    options.JsonSerializerOptions.DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull;
});

builder.Services.Configure<Microsoft.AspNetCore.Http.Json.JsonOptions>(options =>
{
    options.SerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles;
    options.SerializerOptions.DefaultIgnoreCondition = System.Text.Json.Serialization.JsonIgnoreCondition.WhenWritingNull;
});

builder.Services.AddValidatorsFromAssemblyContaining<CompanyDTOValidator>();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.MapGet("/check", () => Results.Ok("OK"));

app.MapPost("/companies", async (
    AppDbContext dbCotext,
    [FromBody] CreateCompanyDTO companyDTO,
    IValidator<CreateCompanyDTO> validator
    ) =>
{
    var validationResult = await validator.ValidateAsync(companyDTO);
    if (!validationResult.IsValid)
    {
        return Results.BadRequest(validationResult.Errors.Select(e => e.ErrorMessage));
    }

    if (await dbCotext.Companies.AnyAsync(c => c.Name == companyDTO.Name))
    {
        return Results.Conflict($"There is already a company with the name {companyDTO.Name}.");
    }

    var newCompany = new Company
    {
        Id = Guid.NewGuid(),
        Name = companyDTO.Name,
        Password = BCrypt.Net.BCrypt.HashPassword(companyDTO.Password),
        CreatedAt = DateTime.UtcNow
    };

    newCompany.GenerateCode();

    dbCotext.Companies.Add(newCompany);

    await dbCotext.SaveChangesAsync();

    return Results.Created($"/companies/{newCompany.Code}", newCompany);
});

app.MapPost("/feedbacks/{code}", async (AppDbContext dbContext, string code, CreateFeedbackDTO feedbackDTO) =>
{

    var company = await dbContext.Companies.FirstOrDefaultAsync(c => c.Code == code);
    if (company == null)
    {
        return Results.NotFound("Company Not Found.");
    }

    var newFeedback = new Feedback
    {
        Id = Guid.NewGuid(),
        Type = feedbackDTO.Type,
        Message = feedbackDTO.Message,
        CompanyId = company.Id.ToString(),
        CreatedAt = DateTime.UtcNow
    };

    dbContext.Feedbacks.Add(newFeedback);
    await dbContext.SaveChangesAsync();

    return Results.Created($"/feedback/{code}{feedbackDTO}", feedbackDTO);
});

app.MapPost("/feedbacks", async (
    AppDbContext dbContext,
    [FromBody] GetAllFeedbackDTO dto) =>
{
    var company = await dbContext.Companies.FirstOrDefaultAsync(c => c.Code == dto.Code);

    if (company == null)
    {
        return Results.NotFound("Company Not Found.");
    }

    if (!BCrypt.Net.BCrypt.Verify(dto.Password, company.Password))
    {
        return Results.Unauthorized();
    }

    var feedbacks = await dbContext.Feedbacks
        .Where(f => f.CompanyId == company.Id.ToString())
        .OrderByDescending(f => f.CreatedAt)
        .Select(f => new
        {
            f.Message,
            f.Type,
            f.CreatedAt
        })
        .ToListAsync();

    return Results.Ok(new
    {
        CompanyName = company.Name,
        Feedbacks = feedbacks
    });
});


app.Run();

//http://localhost:5238/swagger/index.html