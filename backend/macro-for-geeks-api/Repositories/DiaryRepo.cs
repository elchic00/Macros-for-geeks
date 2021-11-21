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
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace macro_for_geeks_api.Repositories
{
    public class DiaryRepo : IDiaryRepo
    {
        private FoodContext _db;

        public DiaryRepo(FoodContext db)
        {
            this._db = db;
        }
        public async Task<IEnumerable<Diary>> GetEntriesByDate(short id, string date)
        {
            /*Return a list of*/
            return await (_db.Diaries ?? throw new InvalidOperationException()).Where(d => d.UserId == id && d.Date == date).ToListAsync();

        }

        public async Task<IEnumerable<Diary>> GetEntriesByMeal(short id, string meal, string date)
        {
            return await (_db.Diaries ?? throw new InvalidOperationException()).Where(d => d.UserId == id && d.Date == date && d.MealTime == meal).ToListAsync();
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

        public async Task PostEntry(Diary diary)
        {
            await _db.Diaries!.AddAsync(diary);
            await _db.SaveChangesAsync();
        }

        public List<Diary> GetEntriesByUser(short id)
        {
            throw new NotImplementedException();
        }
        
        
    }

}

