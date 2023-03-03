using CustomerWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        private readonly TeacherDbContext _teacherDbContext;
        public ActivitiesController(TeacherDbContext teacherDbContext)
        {
            _teacherDbContext = teacherDbContext;
        }
        [HttpGet]
        public ActionResult<IEnumerable<ResponseActivities>> GetActivities()
        {
            var activitiesList = new List<ResponseActivities>();
            var activities = _teacherDbContext.Activities.ToList();
            foreach(var item in activities)
            {
                var activity = new ResponseActivities();
                var schedule = _teacherDbContext.Schedules.FirstOrDefault(p => p.IdSchedule == item.IdSchedule);
                var scheduleRes = new ResponseSchedule();
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
        [HttpGet("{IdActivities:int}")]
        public  ActionResult<ResponseActivities> GetById(int IdActivities)
        {
            var item = _teacherDbContext.Activities.FirstOrDefault(p=>p.IdActivities== IdActivities);
            var activity = new ResponseActivities();
            var schedule = _teacherDbContext.Schedules.FirstOrDefault(p => p.IdSchedule == item.IdActivities);
            var scheduleRes = new ResponseSchedule();
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
            }
            return activity;
        }
        [HttpPost]
        public async Task<ActionResult> Create(Activities activities)
        {
            var activity = _teacherDbContext.Activities.FirstOrDefault(p => p.DateRegister == activities.DateRegister && p.IdSchedule == activities.IdSchedule);
            if (activity != null)
            {
                return Ok(); 
            }
           await _teacherDbContext.Activities.AddAsync(activities);
            await _teacherDbContext.SaveChangesAsync();
            return Ok("OK");
        }
        [HttpPut]
        public async Task<ActionResult> Update(Activities activities)
        {
            _teacherDbContext.Activities.Update(activities);
            await _teacherDbContext.SaveChangesAsync();
            return Ok("OK");
        }

        [HttpDelete("{IdSubject:int}")]
        public async Task<ActionResult> Delete(int IdSubject)
        {
            var teacher = await _teacherDbContext.Activities.FindAsync(IdSubject);
            if (teacher == null)
            {
                return Ok("ERROR");
            }
            _teacherDbContext.Activities.Remove(teacher);
            await _teacherDbContext.SaveChangesAsync();
            return Ok("OK");
        }
    }
}
