using System.Web.Http;
using macro_for_geeks_api.Models;
using macro_for_geeks_api.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace macro_for_geeks_api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(option => option.AddPolicy("FoodAPIPolicy", builder => {
                builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();

            }));
            services.AddEntityFrameworkSqlite().AddDbContext<FoodContext>(item => item.UseSqlite(Configuration.GetConnectionString("FoodConnectionString")));
            services.AddScoped<IUserRepo, UserRepo>();
            services.AddScoped<IDiaryRepo, DiaryRepo>();
            services.AddControllers();
            services.AddSwaggerGen();
            
        }
        
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseCors("FoodAPIPolicy");

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            
            //Swagger 
            HttpConfiguration config = new HttpConfiguration();
            SwaggerConfig.Register(config);
            app.UseSwagger();  
            app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "macro-for-geeks API");  
            });  
            
        }
    }
}