using Microsoft.AspNetCore.Mvc;
using System;
using macro_for_geeks_api.Repositories;

namespace macro_for_geeks_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private IUserRepo userRepo;
        public UserController(IUserRepo userRepo)
        {
            this.userRepo = userRepo;
            
        }

        [HttpGet]
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
        [HttpGet]
        [Route( "{id}")]
        public IActionResult GetUserById(long id)
        {
            try
            {
                var messages = userRepo.GetUserById(id);
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