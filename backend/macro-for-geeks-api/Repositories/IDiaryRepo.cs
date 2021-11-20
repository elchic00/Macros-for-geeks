using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using macro_for_geeks_api.Models;
using macro_for_geeks_api.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace macro_for_geeks_api.Repositories
{
    public interface IDiaryRepo
    {
        List<DiaryViewModel> GetEntriesByUser(long id);
        
        Task<IEnumerable<Diary>> GetEntriesByDate(long id, string date);
        
        Task<IEnumerable<Diary>> GetEntriesByMeal(long id, string meal, string date);

        Task<Diary> PostEntry(Diary entry);




        /*List<DiaryViewModel> */

    }
}