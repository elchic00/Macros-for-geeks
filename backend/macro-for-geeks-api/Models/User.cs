using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace macro_for_geeks_api.Models
{
    public partial class User
    {
        /*public User()
        {
            Diaries = new HashSet<Diary>();
        }*/
        [Key]
        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        /*public ICollection<Diary> Diaries { get; set; }*/
    }
}
