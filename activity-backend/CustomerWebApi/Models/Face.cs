using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerWebApi.Models
{
    [Table("face", Schema = "dbo")]
    public class Face
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID")]
        public int IdFace { get; set; }

        [Column("CLFFACE1")]
        public string ClfFace1 { get; set; }
        [Column("CLFFACE2")]
        public string ClfFace2 { get; set; }
        [Column("CLFFACE3")]
        public string ClfFace3 { get; set; }
        [Column("IDTEACHER")]
        [ForeignKey("IDTEACHER")]
        public int IdTeacher { get; set; }
    }
}
