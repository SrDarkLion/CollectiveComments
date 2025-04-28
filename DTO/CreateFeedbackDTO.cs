using System.ComponentModel.DataAnnotations;

namespace CollectiveComments.DTO
{
    public class CreateFeedbackDTO
    {
        [Required(ErrorMessage = "The feedback message is mandatory.")]
        [StringLength(600, MinimumLength = 10, ErrorMessage = "Feedback must be a maximum of 600 characters.")]
        public required string Message { get; set; }

        [Required(ErrorMessage = "Feedback type is mandatory.")]
        public required FeedbackType Type { get; set; }
    }
}
