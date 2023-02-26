using CustomerWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScheduleController : Controller
    {
        private readonly TeacherDbContext _teacherDbContext;
        public ScheduleController(TeacherDbContext teacherDbContext)
        {
            _teacherDbContext = teacherDbContext;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Schedule>> GetClassroom()
        {
            return _teacherDbContext.Schedules;
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
