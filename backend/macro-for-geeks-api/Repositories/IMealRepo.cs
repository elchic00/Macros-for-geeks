using System.Collections.Generic;
using macro_for_geeks_api.Models;

namespace macro_for_geeks_api.Repositories
{
    public interface IMealRepo
    {
        IEnumerable<Mealtime> GetMeals();
    }
}