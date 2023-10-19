
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace CustomerWebApi.Models
{
    [Table("time", Schema = "dbo")]
    public class Time
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID")]
        public int IdTime { get; set; }
        [Column("STARTTIME")]
        public string StartTime { get; set; }
        [Column("ENDTIME")]
        public string EndTime { get; set; }
    }

}

