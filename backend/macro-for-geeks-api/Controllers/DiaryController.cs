using Microsoft.AspNetCore.Mvc;

namespace macro_for_geeks_api.Controllers
{
    public class DiaryController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}