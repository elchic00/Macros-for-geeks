using System.Collections.Generic;
using macro_for_geeks_api.Models;
using macro_for_geeks_api.ViewModels;

namespace macro_for_geeks_api.Repositories
{
    public interface IDiaryRepo
    {
        List<DiaryViewModel> GetEntriesByUser(string id);
        
        List<DiaryViewModel> GetEntriesByDate(string id);
        
        /*List<DiaryViewModel> */
        
    }
}