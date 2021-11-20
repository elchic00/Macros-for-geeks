using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using macro_for_geeks_api.Models;
using macro_for_geeks_api.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace macro_for_geeks_api.Repositories
{
    public class DiaryRepo : IDiaryRepo
    {
        private FoodContext _db;

        public DiaryRepo(FoodContext db)
        {
            this._db = db;
        }
        public async Task<IEnumerable<Diary>> GetEntriesByDate(long id, string date)
        {
            return (_db.Diaries ?? throw new InvalidOperationException()).Where(d => d.UserId == id && d.Date == date);
            
            /*
            var res = (_db.Diaries ?? throw new InvalidOperationException()).Where(d => d.UserId  == id && d.Date == date);
            */
            /*foreach (var r in res)
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

            return entries;*/

        }

        public async Task<IEnumerable<Diary>> GetEntriesByMeal(long id, string meal, string date)
        {
            return (_db.Diaries ?? throw new InvalidOperationException()).Where(d => d.UserId == id && d.Date == date && d.MealTime == meal);
            /*var entries = new List<DiaryViewModel>();
            var res = (_db.Diaries ?? throw new InvalidOperationException()).Where(d => d.UserId  == id && d.MealTime == meal && d.Date == date);
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

            return entries;*/
        }

        public async Task<Diary> PostEntry(Diary diary)
        {
            
            var res = await _db.Diaries.AddAsync(diary);
            await _db.SaveChangesAsync();
            return res.Entity;
            /*
            using (var ctx = new FoodContext() )
    {
        ctx.Diaries.Add(new Diary()
        {
            UserId = entry.UserId,
            Food = entry.Food,
            Calories = entry.Calories,
            Carbohydrates = entry.Carbohydrates,
            Fats = entry.Fats,
            Protein = entry.Protein,
            Date = entry.Date,
            MealTime = entry.MealTime
        });

        await ctx.SaveChangesAsync();
    }
    */



        }

        public List<DiaryViewModel> GetEntriesByUser(long id)
        {
            throw new NotImplementedException();
        }
        
        
     
    }

}

