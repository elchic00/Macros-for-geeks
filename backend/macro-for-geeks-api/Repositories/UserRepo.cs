using System;
using System.Collections.Generic;
using System.Linq;
using macro_for_geeks_api.Models;

namespace macro_for_geeks_api.Repositories
{

    public class UserRepo : IUserRepo
    {
        private FoodContext _db;

        public UserRepo(FoodContext db)
        {
            _db = db;
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
                return _db.Users!.FirstOrDefault(u => u.Id == id);
            }
        }

        public bool PostUser(User user)
        {
            if (user != null)
            {
                _db.Users!.Add(user);
                _db.SaveChanges();
                return true;
            }

            return false;
        }

        public bool Put(User user)
        {
            var userUpdate = _db.Users.FirstOrDefault(u => u.Id == user.Id);
            if (userUpdate != null)
            {
                userUpdate.Age = user.Age;
                userUpdate.Email = user.Email;
                userUpdate.Name = user.Name;
                userUpdate.Picture = user.Picture;
                userUpdate.Weight = user.Weight;
                userUpdate.CarbohydrateGoal = user.CarbohydrateGoal;
                userUpdate.FatGoal = user.FatGoal;
                userUpdate.ProteinGoal = user.ProteinGoal;
                userUpdate.Feet = user.Feet;
                userUpdate.Inches = user.Inches;

                _db.SaveChanges();
                return true;
            }

            return false;

        }

        public bool deleteUser(int id)
        {
            if (_db.Users == null) return false;
            var userDelete = _db.Users.FirstOrDefault(u => u.Id == id);
            _db.Users.Remove(userDelete ?? throw new InvalidOperationException());
            _db.SaveChanges();
            return true;

        }
    }

}
