using System;
using System.Collections.Generic;

namespace macro_for_geeks_api.Models
{
    public partial class Diary
    {
        public long UserId { get; set; }
        public string Food { get; set; }
        public long? Calories { get; set; }
        public long? Carbohydrates { get; set; }
        public long? Fats { get; set; }
        public long? Protein { get; set; }
        public string Date { get; set; }
        public string MealTime { get; set; }

        public virtual User User { get; set; }
    }
}
