using CustomerWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerWebApi.Models
{
    public class RequerimentsLogin
    {
        public string email { get; set; }
        public string password { get; set; }
    }
    public class ResponseSchedule
    {
        public int IdShedule { get; set; }
        public string Day { get; set; }
        public Time Time { get; set; }
        public Classroom Classroom { get; set; }
        public Subject Subject { get; set; }
        public Teacher Teacher { get; set; }
    }
    public class RequerimentsGetSchedules
    {
        public string day { get; set; }
    }
    public class RequerimentsGetActivities
    {
        public string date { get; set; }
    }
    public class ResponseActivities
    {
        public int  IdActivities {get; set;}
        public string DateRegister { get; set; }
        public string TimeStart { get; set; }
        public string TimeEnd { get; set; }
        public string TopicClass { get; set;}
        public string Observation { get; set; }
        public bool Justify { get; set; }
        public ResponseSchedule Schedule { get; set; }
    }
    public class RequerimentsGetActivitiesForTeacher
    {
        public int IdTeacher { get; set; }
    }
}
