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
}
