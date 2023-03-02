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
    public class FaceController : ControllerBase
    {
        private readonly TeacherDbContext _teacherDbContext;
        public FaceController(TeacherDbContext teacherDbContext)
        {
            _teacherDbContext = teacherDbContext;
        }
        [HttpGet]
        public ActionResult<IEnumerable<Face>> GetClassroom()
        {
            return _teacherDbContext.Face;
        }
        [HttpPost]
        public async Task<ActionResult> Create(Face classroom)
        {
            await _teacherDbContext.Face.AddAsync(classroom);
            await _teacherDbContext.SaveChangesAsync();
            return Ok("OK");
        }
   
    }
}
