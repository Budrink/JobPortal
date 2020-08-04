using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace JobPortal.Models
{
    public class Offer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid OfferId { get; set; }
        public Guid FreelancerId { get; set; }
        public virtual User Freelancer { get; set; }
        public Guid JobId { get; set; }
        public virtual Job Job { get; set; }
        public string Description { get; set; }
        public DateTime Deadline { get; set; }
    }
}
