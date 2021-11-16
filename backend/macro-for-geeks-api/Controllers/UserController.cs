using Microsoft.AspNetCore.Mvc;
using System;
using macro_for_geeks_api.Repositories;

namespace macro_for_geeks_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserRepo userRepo;

        public UserController(IUserRepo userRepo)
        {
            this.userRepo = userRepo;
        }

        [HttpGet]
        [Route("users")]
        public IActionResult GetUsers()
        {
            try
            {
                var messages = userRepo.GetUsers();
                if (messages == null)
                {
                    return NotFound();
                }

                return Ok(messages);
                
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}