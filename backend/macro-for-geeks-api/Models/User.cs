using System;
using System.Collections.Generic;

namespace macro_for_geeks_api.Models
{
    public sealed partial class User
    {
        public User()
        {
            Diaries = new HashSet<Diary>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }

        public ICollection<Diary> Diaries { get; set; }
    }
}
