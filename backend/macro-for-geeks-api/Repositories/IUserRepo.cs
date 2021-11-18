using System.Collections.Generic;
using macro_for_geeks_api.ViewModels;

namespace macro_for_geeks_api.Repositories
{
    public interface IUserRepo
    {
        List<UserViewModel> GetUsers();
        List<UserViewModel> GetUserById(long id);
      
    }
}