using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CollectiveComments.Models
{
    [Table("feedbacks")]
    public class Feedback
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        [Required]
        [StringLength(500)]
        public required string Message { get; set; }

        [Required]
        public required FeedbackType Type { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        [ForeignKey("Code")]
        public required string Code { get; set; }

        public virtual Company? Company { get; set; }
    }
}
