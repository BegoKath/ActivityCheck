using CustomerWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {
        private readonly TeacherDbContext _teacherDbContext;
        public ScheduleController(TeacherDbContext teacherDbContext)
        {
            _teacherDbContext = teacherDbContext;
        }
        [HttpGet]
        public ActionResult<IEnumerable<ResponseSchedule>> GetSchedules()
        {
            var schedulesList = new List<ResponseSchedule>();
            var schedules = _teacherDbContext.Schedules.ToList();
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
        public async Task<ActionResult> Create(Schedule classroom)
        {
            await _teacherDbContext.Schedules.AddAsync(classroom);
            await _teacherDbContext.SaveChangesAsync();
            return Ok("OK");
        }
        [HttpDelete("{IdClassroom:int}")]
        public async Task<ActionResult> Delete(int IdClassroom)
        {
            var teacher = await _teacherDbContext.Schedules.FindAsync(IdClassroom);
            if (teacher == null)
            {
                return Ok("ERROR");
            }
            _teacherDbContext.Schedules.Remove(teacher);
            await _teacherDbContext.SaveChangesAsync();
            return Ok("OK");
        }
    }
}
