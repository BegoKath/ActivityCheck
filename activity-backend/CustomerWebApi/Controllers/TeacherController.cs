using CustomerWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CustomerWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherController : ControllerBase
    {
        private readonly TeacherDbContext _teacherDbContext;
        public TeacherController(TeacherDbContext teacherDbContext)
        {
            _teacherDbContext = teacherDbContext;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Teacher>> GetTeachers()
        {
            return _teacherDbContext.Teachers;
        }
        [HttpGet("{IdTeacher:int}")]
        public async Task<ActionResult<Teacher>> GetById(int IdTeacher)
        {
            var teacher = await _teacherDbContext.Teachers.FindAsync(IdTeacher);
            return teacher;
        }
        [HttpPost]
        public async Task<ActionResult> Create(Teacher teacher)
        {
            await _teacherDbContext.Teachers.AddAsync(teacher);
            await _teacherDbContext.SaveChangesAsync();
            return Ok();
        }
        [HttpPut]
        public async Task<ActionResult> Update(Teacher teacher)
        {
            _teacherDbContext.Teachers.Update(teacher);
            await _teacherDbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{IdTeacher:int}")]
        public async Task<ActionResult> Delete(int IdTeacher)
        {
            var teacher = await _teacherDbContext.Teachers.FindAsync(IdTeacher);
            _teacherDbContext.Teachers.Remove(teacher);
            await _teacherDbContext.SaveChangesAsync();
            return Ok();
        }

    }
}
