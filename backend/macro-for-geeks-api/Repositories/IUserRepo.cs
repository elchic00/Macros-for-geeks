using System.Collections.Generic;
using System.Threading.Tasks;
using macro_for_geeks_api.Models;
using macro_for_geeks_api.ViewModels;

namespace macro_for_geeks_api.Repositories
{
    public interface IUserRepo
    {
        IEnumerable<User> GetUsers();
        User? GetUserById(short id);
      
    }
}