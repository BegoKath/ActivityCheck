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
    public class TimeController : ControllerBase
    {
        private readonly TeacherDbContext _teacherDbContext;
        public TimeController(TeacherDbContext teacherDbContext)
        {
            _teacherDbContext = teacherDbContext;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Time>> GetClassroom()
        {
            return _teacherDbContext.Times;
        }
        [HttpPost]
        public async Task<ActionResult> Create(Time classroom)
        {
            await _teacherDbContext.Times.AddAsync(classroom);
            await _teacherDbContext.SaveChangesAsync();
            return Ok("OK");
        }
        [HttpDelete("{IdClassroom:int}")]
        public async Task<ActionResult> Delete(int IdClassroom)
        {
            var teacher = await _teacherDbContext.Times.FindAsync(IdClassroom);
            if (teacher == null)
            {
                return Ok("ERROR");
            }
            _teacherDbContext.Times.Remove(teacher);
            await _teacherDbContext.SaveChangesAsync();
            return Ok("OK");
        }
    }
}
