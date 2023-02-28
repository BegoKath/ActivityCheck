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
    public class ActivitiesController : ControllerBase
    {
        private readonly TeacherDbContext _teacherDbContext;
        public ActivitiesController(TeacherDbContext teacherDbContext)
        {
            _teacherDbContext = teacherDbContext;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Activities>> GetActivities()
        {
            return _teacherDbContext.Activities;
        }
        [HttpGet("{IdActivities:int}")]
        public async Task<ActionResult<Activities>> GetById(int IdActivities)
        {
            var subject = await _teacherDbContext.Activities.FindAsync(IdActivities);
            return subject;
        }
        [HttpPost]
        public async Task<ActionResult> Create(Activities activities)
        {
            await _teacherDbContext.Activities.AddAsync(activities);
            await _teacherDbContext.SaveChangesAsync();
            return Ok("OK");
        }
        [HttpPut]
        public async Task<ActionResult> Update(Activities activities)
        {
            _teacherDbContext.Activities.Update(activities);
            await _teacherDbContext.SaveChangesAsync();
            return Ok();
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
