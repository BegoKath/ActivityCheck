using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerWebApi.Models
{
    [Table("subject", Schema = "dbo")]
    public class Subject
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID")]
        public int IdSubject { get; set; }
        [Column("TITLE")]
        public int Title { get; set; }
        [Column("NRC")]
        public int Nrc { get; set; }
    }
}
