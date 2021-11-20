using System;
using System.Threading.Tasks;
using macro_for_geeks_api.Models;
using macro_for_geeks_api.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace macro_for_geeks_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DiaryController : ControllerBase
    {
        private IDiaryRepo _diaryRepo;
        public DiaryController(IDiaryRepo diaryRepo)
        {
            this._diaryRepo = diaryRepo;
            
        }
        [HttpGet]
        [Route( "{id:long}/{date}")]
        public IActionResult GetEntriesByDate(long id, string date)
        {
            try
            {
                var messages = _diaryRepo.GetEntriesByDate(id,date);
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
        [Route( "{id:long}/{meal}/{date}")]
        public IActionResult GetEntriesByMeal(long id, string meal, string date)
        {
            try
            {
                var messages = _diaryRepo.GetEntriesByMeal(id,meal,date);
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
        [HttpPost]
        [Route("")]
        public async Task<ActionResult<Diary>> PostEntry(Diary entry)
        {
            try
            {
                if (entry == null)
                    return BadRequest();
                
                var postEntry = await _diaryRepo.PostEntry(entry);
                return CreatedAtAction(nameof(GetEntriesByDate),
                new {date = postEntry.Date}, postEntry);

            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error posting entry to Diary");
            }
        }
        
    }
}