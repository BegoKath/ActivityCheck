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
    public class ClassroomController : ControllerBase
    {
        private readonly TeacherDbContext _teacherDbContext;
        public ClassroomController(TeacherDbContext teacherDbContext)
        {
            _teacherDbContext = teacherDbContext;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Classroom>> GetClassroom()
        {
            return _teacherDbContext.Classrooms;
        }
        [HttpPost]
        public async Task<ActionResult> Create(Classroom classroom)
        {
            await _teacherDbContext.Classrooms.AddAsync(classroom);
            await _teacherDbContext.SaveChangesAsync();
            return Ok("OK");
        }
        [HttpDelete("{IdClassroom:int}")]
        public async Task<ActionResult> Delete(int IdClassroom)
        {
            var teacher = await _teacherDbContext.Classrooms.FindAsync(IdClassroom);
            if (teacher == null)
            {
                return Ok("ERROR");
            }
            _teacherDbContext.Classrooms.Remove(teacher);
            await _teacherDbContext.SaveChangesAsync();
            return Ok("OK");
        }
    }
}
