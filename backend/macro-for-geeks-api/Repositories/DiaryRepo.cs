using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using macro_for_geeks_api.Models;

namespace macro_for_geeks_api.Repositories
{
    public class DiaryRepo : IDiaryRepo
    {
        private FoodContext _db;

        public DiaryRepo(FoodContext db)
        {
            this._db = db;
        }
        public IEnumerable<Diary> GetEntriesByDate(short id, string date)
        {
            /*Return a list of*/
            return  (_db.Diaries ?? throw new InvalidOperationException()).Where(d => d.UserId == id && d.Date == date);

        }

        public IEnumerable<Diary> GetEntriesByMeal(short id, string meal, string date)
        {
            return (_db.Diaries ?? throw new InvalidOperationException()).Where(d => d.UserId == id && d.Date == date && d.MealTime == meal);
            /*var entries = new List<DiaryViewModel>();
            var res = (_db.Diaries ?? throw new InvalidOperationException()).Where(d => d.UserId  == id && d.MealTime == meal && d.Date == date);
            foreach (var r in res)
            {
                DiaryViewModel diary = new DiaryViewModel
                {date
                    UserId = r.UserId,
                    Food = r.Food,
                    Calories = r.Calories,
                    Carbohydrates = r.Carbohydrates,
                    Fats = r.Fats,
                    Protein = r.Protein,
                    Date = r.Date,
                    MealTime = r.MealTime
                };
                entries.Add(diary);
            }

            return entries;*/
        }

        public  void PostEntry(Diary diary)
        {
                _db.Diaries!.Add(diary);
                _db.SaveChanges();
                /*HttpRequestMessage request = new HttpRequestMessage();
                HttpResponseMessage response = request.CreateResponse(HttpStatusCode.Accepted, "Successful post to database");*/
        }

        public bool DeleteDiary(int entryId)
        {
            Debug.Assert(_db.Diaries != null, "_db.Diaries != null");
            var diaryDelete = _db.Diaries.FirstOrDefault(d => d.Entryid == entryId);
            
            if (diaryDelete == null) return false;
            
            _db.Diaries.Remove(diaryDelete);
            _db.SaveChanges();
            return true;
        }

        public List<Diary> GetEntriesByUser(short id)
        {
            throw new NotImplementedException();
        }
        
        
    }

}

