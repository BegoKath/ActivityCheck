using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerWebApi.Models
{
    [Table("classroom", Schema = "dbo")]
    public class Classroom
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID")]
        public int IdClassroom { get; set; }
        [Column("NUMCLASSROOM")]
        public string NumClassroom { get; set; }
        [Column("FIELD")]
        public string FieldClassroom { get; set; }
    }
}
