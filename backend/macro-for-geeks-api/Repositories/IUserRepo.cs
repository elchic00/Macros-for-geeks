using System.Collections.Generic;
using System.Threading.Tasks;
using macro_for_geeks_api.Models;
using macro_for_geeks_api.ViewModels;

namespace macro_for_geeks_api.Repositories
{
    public interface IUserRepo
    {
        Task<IEnumerable<User>> GetUsers();
        Task<User?> GetUserById(short id);
      
    }
}