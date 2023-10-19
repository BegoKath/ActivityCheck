using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerWebApi.Models
{
    [Table("schedule", Schema = "dbo")]
    public class Schedule
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID")]
        public int IdSchedule { get; set; }
        [Column("DAY")]
        public string Day { get; set; }
        [Column("IDTIME")]
        [ForeignKey("IDTIME")]
        public int IdTime { get; set; }
        [Column("IDCLASSROOM")]
        [ForeignKey("IDCLASSROOM")]
        public int IdClassroom { get; set; }
        [Column("IDSUBJECT")]
        [ForeignKey("IDSUBJECT")]
        public int IdSubject { get; set; }
        [Column("IDTEACHER")]
        [ForeignKey("IDTEACHER")]
        public int IdTeacher { get; set; }

    }
}
