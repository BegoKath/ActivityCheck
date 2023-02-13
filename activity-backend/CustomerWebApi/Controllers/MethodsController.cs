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
    }
}
