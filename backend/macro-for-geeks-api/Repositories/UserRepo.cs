using macro_for_geeks_api.ViewModels;
using System.Collections.Generic;
using System.Linq;
using macro_for_geeks_api.Models;
using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.EntityFrameworkCore;

namespace macro_for_geeks_api.Repositories
{
    
    public class UserRepo : IUserRepo
    {
        private FoodContext _db;

        public UserRepo(FoodContext db)
        {
            this._db = db;
        }

        public IEnumerable<User> GetUsers()
        {
            {
                return _db.Users!.ToList();
            }
        }

        public User? GetUserById(short id)
        {
            {
                return  _db.Users!.FirstOrDefault(u => u.Id == id);
                /*var result = (_db.Users ?? throw new InvalidOperationException()).Where(u => u.Id == id);
                foreach (var r in result)
                {
                    UserViewModel user = new UserViewModel
                    {
                        Id = r.Id,
                        Name = r.Name,
                        Email = r.Email
                    };
                    users.Add(user);
                }

                return users;*/
            }
        }

        public void postUser(User user)
        {
            _db.Users!.Add(user);
            _db.SaveChanges();
        }
        
    }
    
}
