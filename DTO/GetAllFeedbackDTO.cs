using System.ComponentModel.DataAnnotations;

namespace CollectiveComments.DTO
{
    public class GetAllFeedbackDTO
    {
        [Required(ErrorMessage = "The code is mandatory.")]
        [StringLength(20, MinimumLength = 9, ErrorMessage = "The code must have a maximum of 20 characters.")]
        public string Code { get; set; }

        [Required(ErrorMessage = "Password is required!")]
        [StringLength(15, MinimumLength = 6, ErrorMessage = "The password must be between 6 and 15 characters.")]
        public string Password { get; set; }
    }
}