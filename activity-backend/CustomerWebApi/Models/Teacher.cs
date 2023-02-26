using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace CustomerWebApi.Models
{
    [Table("teacher", Schema ="dbo")]
    public class Teacher
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID")]
        public int IdTeacher { get; set; }
        [Column("TEACHER_EMAIL")]
        public string EmailTeacher { get; set; }
        [Column("TEACHER_PASSWORD")] 
        public string PasswordTeacher { get; set; }
        [Column("TEACHER_IDENTITYNUMBER")]
        public string IdentityNumber { get; set; }
        [Column("TEACHER_NAMES")]
        public string Names { get; set; }
        [Column("TEACHER_LASTNAMES")]
        public string Surname { get; set; }
        [Column("TEACHER_FACEID")]
        public string FaceId { get; set; }

    }
}
