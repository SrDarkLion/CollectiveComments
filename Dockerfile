FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /app

COPY ./ /app

RUN dotnet publish "./CollectiveComments.csproj" --output "/app/dist" --configuration Release

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS prd

WORKDIR /app

COPY --from=build /app/dist/ /app

EXPOSE 8080

ENTRYPOINT ["dotnet", "CollectiveComments.dll"]