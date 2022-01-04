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
                userUpdate.Height = user.Height;
                userUpdate.Name = user.Name;
                userUpdate.Picture = user.Picture;
                userUpdate.Weight = user.Weight;
                userUpdate.CarbohydrateGoal = user.CarbohydrateGoal;
                userUpdate.FatGoal = user.FatGoal;
                userUpdate.ProteinGoal = user.ProteinGoal;
                _db.SaveChanges();
                return true;
            }

            return false;

        }

        public bool deleteUser(int id)
        {
            var userDelete = _db.Users.FirstOrDefault(u => u.Id == id);
            if (userDelete != null)
            {
                _db.Users.Remove(userDelete);
                _db.SaveChanges();
                return true;
            }
            return false;
        }
    }

}
