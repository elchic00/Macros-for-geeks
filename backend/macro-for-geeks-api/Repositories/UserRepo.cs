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
        private FoodContext db;

        public UserRepo(FoodContext db)
        {
            this.db = db;
        }

        public List<UserViewModel> GetUsers()
        {
            {
                var users = new List<UserViewModel>();

                var result = from u in db.Users
                    select u;
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

            return null;
        }

        public List<UserViewModel> GetUserById(long id)
        {
            {
                var users = new List<UserViewModel>();

                var result = db.Users.Where(u => u.Id == id);
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
