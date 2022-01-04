using Microsoft.AspNetCore.Mvc;
using System;
using macro_for_geeks_api.Models;
using macro_for_geeks_api.Repositories;

namespace macro_for_geeks_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private IUserRepo _userRepo;
        public UserController(IUserRepo userRepo)
        {
            this._userRepo = userRepo;
            
        }

        [HttpGet]
        public IActionResult GetUsers()
        {
            try
            {
                var messages = _userRepo.GetUsers();
                return Ok(messages);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        [HttpGet]
        [Route( "{id}")]
        public IActionResult GetUserById(short id)
        {
            try
            {
                var messages = _userRepo.GetUserById(id);
                return Ok(messages);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        
        [HttpPut]
        public bool UpdateUser(User user)
        {
            return _userRepo.Put(user);
        }

        [HttpDelete]
        [Route("{id}")]
        public bool deleteUser(int id)
        {
            return _userRepo.deleteUser(id);
        }
    }
}