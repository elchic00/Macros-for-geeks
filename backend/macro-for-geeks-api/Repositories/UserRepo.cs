/*
using macro_for_geeks_api.ViewModels;
using System.Collections.Generic;
using System.Linq;
using macro_for_geeks_api.Models;
using System;

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

                var result = from o in db.Users
                    select o;
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
    }
    
}
*/



