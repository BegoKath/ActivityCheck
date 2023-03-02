using CustomerWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace CustomerWebApi.Controllers
{
    [ApiController]
    public class MethodsController : ControllerBase
    {
        private readonly TeacherDbContext _teacherDbContext;
     
        public MethodsController(TeacherDbContext teacherDbContext)
        {
            _teacherDbContext = teacherDbContext;
        }
        [HttpPost]
        [Route("api/login/email")]
        public  ActionResult LoginWithEmail(RequerimentsLogin requeriments)
        {
            var teacher=  _teacherDbContext.Teachers.FirstOrDefault(t=>t.EmailTeacher==requeriments.email);
            if (teacher == null)
            {
                return (Ok("ERROR"));
            }
            if(teacher.PasswordTeacher!= requeriments.password)
            {
                return (Ok("PASSWORD"));
            }

            return Ok("OK");
        }
        [HttpPost]
        [Route("api/Schedule/day")]
        public ActionResult<IEnumerable<ResponseSchedule>> GeDaySchedules(RequerimentsGetSchedules day)
        {
            var schedulesList = new List<ResponseSchedule>();
            var schedules = _teacherDbContext.Schedules.Where(p => p.Day == day.day).ToList();
            foreach (var item in schedules)
            {
                var schedule = new ResponseSchedule();
                var time = _teacherDbContext.Times.FirstOrDefault(p => p.IdTime == item.IdTime);
                var classroom = _teacherDbContext.Classrooms.FirstOrDefault(p => p.IdClassroom == item.IdClassroom);
                var teacher = _teacherDbContext.Teachers.FirstOrDefault(p => p.IdTeacher == item.IdTeacher);
                var subject = _teacherDbContext.Subjects.FirstOrDefault(p => p.IdSubject == item.IdSubject);
                if (time != null || classroom != null || teacher != null || subject != null)
                {
                    schedule.IdShedule = item.IdSchedule;
                    schedule.Day = item.Day;
                    schedule.Time = time;
                    schedule.Classroom = classroom;
                    schedule.Teacher = teacher;
                    schedule.Subject = subject;
                    schedulesList.Add(schedule);
                }

            }
            return schedulesList;
        }
        [HttpPost]
        [Route("api/Activities/date")]
        public  ActionResult<IEnumerable<ResponseActivities>> GetDateSchedules(RequerimentsGetActivities date)
        {
            var activitiesList = new List<ResponseActivities>();
            var activities =  _teacherDbContext.Activities.Where(p => p.DateRegister == date.date).ToList();
           
            foreach (var item in activities)
            {
                var activity = new ResponseActivities();
               
                var scheduleRes = new ResponseSchedule();
                var schedule = _teacherDbContext.Schedules.FirstOrDefault(p => p.IdSchedule == item.IdSchedule);
                if (schedule != null)
                {
                    var time = _teacherDbContext.Times.FirstOrDefault(p => p.IdTime == schedule.IdTime);
                    var classroom = _teacherDbContext.Classrooms.FirstOrDefault(p => p.IdClassroom == schedule.IdClassroom);
                    var teacher = _teacherDbContext.Teachers.FirstOrDefault(p => p.IdTeacher == schedule.IdTeacher);
                    var subject = _teacherDbContext.Subjects.FirstOrDefault(p => p.IdSubject == schedule.IdSubject);
                    if (time != null || classroom != null || teacher != null || subject != null)
                    {
                        scheduleRes.IdShedule = schedule.IdSchedule;
                        scheduleRes.Day = schedule.Day;
                        scheduleRes.Time = time;
                        scheduleRes.Classroom = classroom;
                        scheduleRes.Teacher = teacher;
                        scheduleRes.Subject = subject;
                    }
                    activity.IdActivities = item.IdActivities;
                    activity.DateRegister = item.DateRegister;
                    activity.TimeStart = item.TimeStart;
                    activity.TimeEnd = item.TimeEnd;
                    activity.TopicClass = item.TopicClass;
                    activity.Observation = item.Observation;
                    activity.Justify = item.Justify;
                    activity.Schedule = scheduleRes;
                    activitiesList.Add(activity);
                }
            }
            return activitiesList;
        }

    }
}
