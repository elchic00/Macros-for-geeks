using System;
using macro_for_geeks_api.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace macro_for_geeks_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DiaryController : ControllerBase
    {
        private IDiaryRepo diaryRepo;
        public DiaryController(IDiaryRepo diaryRepo)
        {
            this.diaryRepo = diaryRepo;
            
        }
        [HttpGet]
        [Route( "{id:long}/{date}")]
        public IActionResult GetEntriesByDate(long id, string date)
        {
            try
            {
                var messages = diaryRepo.GetEntriesByDate(id,date);
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
        [Route( "{id:long}/bymeal/{meal}")]
        public IActionResult GetEntriesByMeal(long id, string meal)
        {
            try
            {
                var messages = diaryRepo.GetEntriesByMeal(id,meal);
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