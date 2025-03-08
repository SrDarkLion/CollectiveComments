using System.ComponentModel.DataAnnotations;

namespace CollectiveComments.DTO
{
    public class CreateFeedbackDTO
    {
        [Required(ErrorMessage = "The code is mandatory.")]
        [StringLength(20, MinimumLength = 9, ErrorMessage = "The code must have a maximum of 20 characters.")]
        public string CompanyCode { get; set; }

        [Required(ErrorMessage = "The feedback message is mandatory.")]
        [StringLength(600, MinimumLength = 10, ErrorMessage = "Feedback must be a maximum of 600 characters.")]
        public string Message { get; set; }

        [Required(ErrorMessage = "Feedback type is mandatory.")]
        public FeedbackType Type { get; set; }
    }
}
