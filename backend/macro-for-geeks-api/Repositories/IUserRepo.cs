using System.Collections.Generic;
using macro_for_geeks_api.Models;

namespace macro_for_geeks_api.Repositories
{
    public interface IUserRepo
    {
        IEnumerable<User> GetUsers();
        User? GetUserById(short id);

        void postUser(User user);

        bool Put(User user);


    }
}