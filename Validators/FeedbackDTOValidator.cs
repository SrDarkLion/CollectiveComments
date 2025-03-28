using FluentValidation;
using CollectiveComments.DTO;

namespace CollectiveComments.Validators
{
    public class FeedbackDTOValidator : AbstractValidator<CreateFeedbackDTO>
    {
        public FeedbackDTOValidator()
        {
            RuleFor(f => f.Message)
                .NotEmpty().WithMessage("The feedback message is mandatory.")
                .MinimumLength(0)
                .MaximumLength(600).WithMessage("Feedback can be a maximum of 600 characters.");
        }
    }
}