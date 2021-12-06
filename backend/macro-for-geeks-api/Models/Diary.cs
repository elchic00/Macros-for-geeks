using System;
using System.Collections.Generic;

namespace macro_for_geeks_api.Models
{
    public partial class Diary
    {
        public int UserId { get; set; }
        public string Food { get; set; }
        public float Calories { get; set; }
        public float Carbohydrates { get; set; }
        public float Fats { get; set; }
        public float Protein { get; set; }
        public string Date { get; set; }
        public string MealTime { get; set; }

        /*public virtual User User { get; set; }*/
    }
}
