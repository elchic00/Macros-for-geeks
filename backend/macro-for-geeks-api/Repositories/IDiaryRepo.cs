using System.Collections.Generic;
using macro_for_geeks_api.Models;

namespace macro_for_geeks_api.Repositories
{
    public interface IDiaryRepo
    {
        List<Diary> GetEntriesByUser(short id);
        
        IEnumerable<Diary> GetEntriesByDate(short id, string date);
        
        IEnumerable<Diary> GetEntriesByMeal(short id, string meal, string date);

        void PostEntry(Diary diary);

        bool DeleteDiary(int entryId);




        /*List<DiaryViewModel> */

    }
}