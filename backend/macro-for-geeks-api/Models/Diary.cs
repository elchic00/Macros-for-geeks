using System;
using System.Collections.Generic;

namespace macro_for_geeks_api.Models
{
    public partial class Diary
    {
        public long UserId { get; set; }
        public long Entryid { get; set; }
        public string Food { get; set; }
        public long? Servings { get; set; }
        public double? Calories { get; set; }
        public double? Carbohydrates { get; set; }
        public double? Fats { get; set; }
        public double? Protein { get; set; }
        public string Date { get; set; }
        public string MealTime { get; set; }

        /*public virtual Mealtime MealTimeNavigation { get; set; }
        public virtual User User { get; set; }*/
    }
}
