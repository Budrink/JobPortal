using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;
namespace JobPortal.Models
{
    public class Award
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid Id { get; set; }
         public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Img { get; set; }
        public virtual IEnumerable<Attachment> Files { get; set; }
    }
}
