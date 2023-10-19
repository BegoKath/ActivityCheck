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
    public class SubjectController : ControllerBase
    {
        private readonly TeacherDbContext _teacherDbContext;
        public SubjectController(TeacherDbContext teacherDbContext)
        {
            _teacherDbContext = teacherDbContext;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Subject>> GetTeachers()
        {
            return _teacherDbContext.Subjects;
        }
        [HttpGet("{IdSubject:int}")]
        public async Task<ActionResult<Subject>> GetById(int IdSubject)
        {
            var subject = await _teacherDbContext.Subjects.FindAsync(IdSubject);
            return subject;
        }
        [HttpPost]
        public async Task<ActionResult> Create(Subject subject)
        {
            await _teacherDbContext.Subjects.AddAsync(subject);
            await _teacherDbContext.SaveChangesAsync();
            return Ok("OK");
        }
        [HttpPut]
        public async Task<ActionResult> Update(Subject subject)
        {
            _teacherDbContext.Subjects.Update(subject);
            await _teacherDbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{IdSubject:int}")]
        public async Task<ActionResult> Delete(int IdSubject)
        {
            var teacher = await _teacherDbContext.Subjects.FindAsync(IdSubject);
            if (teacher == null)
            {
                return Ok("ERROR");
            }
            _teacherDbContext.Subjects.Remove(teacher);
            await _teacherDbContext.SaveChangesAsync();
            return Ok("OK");
        }
    }
}
