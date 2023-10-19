using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerWebApi.Models
{
    [Table("activities", Schema = "dbo")]
    public class Activities
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("ID")]
        public int IdActivities { get; set; }
        [Column("DATE_REGISTER")]
        public string DateRegister { get; set; }
        [Column("TIME_START")]
        public string TimeStart { get; set; }
        [Column("TIME_END")]
        public string TimeEnd { get; set; }
        [Column("TOPIC_CLASS")]
        public string TopicClass { get; set; }
        [Column("OBSERVATION")]
        public string Observation { get; set; }
        [Column("IDSCHEDULE")]
        [ForeignKey("IDSCHEDULE")]
        public int IdSchedule { get; set; }
        [Column("JUSTIFY")]
        public bool Justify { get; set; }
    }
}
