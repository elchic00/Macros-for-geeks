using Swashbuckle.Application;
using System.Web.Http;

namespace macro_for_geeks_api
{
    public static class SwaggerConfig
    {
        public static void Register(HttpConfiguration config)
        {
            config.EnableSwagger(c =>
                {
                    c.SingleApiVersion("v1", "Macro-For-Geeks.API");   
                })
                .EnableSwaggerUi(c =>
                {
                }); 
        }
    }
}