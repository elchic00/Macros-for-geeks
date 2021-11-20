using System.Collections.Generic;
using macro_for_geeks_api.Models;
using macro_for_geeks_api.ViewModels;

namespace macro_for_geeks_api.Repositories
{
    public interface IDiaryRepo
    {
        List<DiaryViewModel> GetEntriesByUser(long id);
        
        List<DiaryViewModel> GetEntriesByDate(long id, string date);
        
        List<DiaryViewModel> GetEntriesByMeal(long id, string meal, string date);
        
        
        
        /*List<DiaryViewModel> */
        
    }
}