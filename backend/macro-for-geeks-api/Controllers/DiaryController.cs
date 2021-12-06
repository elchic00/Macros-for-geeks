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
        private readonly IDiaryRepo _diaryRepo;
        public DiaryController(IDiaryRepo diaryRepo)
        {
            this._diaryRepo = diaryRepo;
        }
        [HttpGet]
        [Route( "{id:long}/{date}")]
        public IActionResult GetEntriesByDate(short id, string date)
        {
            try
            {
                //Get all entries by date for a specified user
                var messages = _diaryRepo.GetEntriesByDate(id,date);
                return Ok(messages);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        
        [HttpGet]
        [Route( "{id:long}/{meal}/{date}")]
        public IActionResult GetEntriesByMeal(short id, string meal, string date)
        {
            try
            {
                var messages = _diaryRepo.GetEntriesByMeal(id,meal,date);
                return Ok(messages);
            }
            catch (Exception)
            {
                return BadRequest();
            }
        }
        
        [HttpPost]
        public void PostEntry(Diary diary)
        {
            _diaryRepo.PostEntry(diary);
        }
        
    }
}