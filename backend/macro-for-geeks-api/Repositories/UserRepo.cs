using macro_for_geeks_api.ViewModels;
using System.Collections.Generic;
using System.Linq;
using macro_for_geeks_api.Models;
using System;
using Microsoft.AspNetCore.Components.Web;

namespace macro_for_geeks_api.Repositories
{
    
    public class UserRepo : IUserRepo
    {
        private FoodContext _db;

        public UserRepo(FoodContext db)
        {
            this._db = db;
        }

        public List<UserViewModel> GetUsers()
        {
            {
                var users = new List<UserViewModel>();

                var result = (_db.Users ?? throw new InvalidOperationException()).Select(u => u);
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

                return users;
            }
        }

        public List<UserViewModel> GetUserById(short id)
        {
            {
                var users = new List<UserViewModel>();

                var result = (_db.Users ?? throw new InvalidOperationException()).Where(u => u.Id == id);
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

                return users;
            }
        }
    }
    
}
