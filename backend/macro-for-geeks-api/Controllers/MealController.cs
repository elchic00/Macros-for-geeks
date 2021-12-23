using System;
using macro_for_geeks_api.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace macro_for_geeks_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MealController : Controller
    {
        private IMealRepo _mealRepo;
        public MealController(IMealRepo mealRepo)
        {
            this._mealRepo = mealRepo;
            
        }
        [HttpGet]
        public IActionResult GetUsers()
        {
            try
            {
                var messages = _mealRepo.GetMeals();
                return Ok(messages);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
    }
}