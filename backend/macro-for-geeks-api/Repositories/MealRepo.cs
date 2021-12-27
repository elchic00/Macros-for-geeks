using System.Collections.Generic;
using System.Linq;
using macro_for_geeks_api.Models;


namespace macro_for_geeks_api.Repositories
{
    public class MealRepo : IMealRepo
    {
        private FoodContext _db;

        public MealRepo(FoodContext db)
        {
            _db = db;
        }

        public IEnumerable<Mealtime> GetMeals()
        {
            {
                return _db.Mealtimes!.ToList();
            }
        }

    }
}