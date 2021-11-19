using System;
using System.Collections.Generic;
using System.Linq;
using macro_for_geeks_api.Models;
using macro_for_geeks_api.ViewModels;

namespace macro_for_geeks_api.Repositories
{
    public class DiaryRepo : IDiaryRepo
    {
        private FoodContext db;

        public DiaryRepo(FoodContext db)
        {
            this.db = db;
        }
        public List<DiaryViewModel> GetEntriesByDate(long id, string date)
        {
            var entries = new List<DiaryViewModel>();
            var res = (db.Diaries ?? throw new InvalidOperationException()).Where(d => d.UserId  == id && d.Date == date);
            foreach (var r in res)
            {
                DiaryViewModel diary = new DiaryViewModel
                {
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

            return entries;

        }

        public List<DiaryViewModel> GetEntriesByMeal(long id, string meal)
        {
            var entries = new List<DiaryViewModel>();
            var res = (db.Diaries ?? throw new InvalidOperationException()).Where(d => d.UserId  == id && d.MealTime == meal);
            foreach (var r in res)
            {
                DiaryViewModel diary = new DiaryViewModel
                {
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

            return entries;
        }
        
        public List<DiaryViewModel> GetEntriesByUser(long id)
        {
            throw new NotImplementedException();
        }

     
    }

}

