using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TRANTIENDO_2122110150.Model
{
    [Table("Brands")]
    public class Brand
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(255)]
        public string Name { get; set; }

        [Required]
        [MaxLength(255)]
        public string Slug { get; set; }

        public string Description { get; set; }

        [MaxLength(255)]
        public string Image { get; set; }

        public int SortOrder { get; set; } = 0;

        public int? CreatedBy { get; set; }

        public int? UpdatedBy { get; set; }

        public bool Status { get; set; } = true;

        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public DateTime UpdatedAt { get; set; } = DateTime.Now;
    }
}
