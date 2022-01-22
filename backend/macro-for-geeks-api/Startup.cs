using System.Web.Http;
using macro_for_geeks_api.Models;
using macro_for_geeks_api.Repositories;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
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
            services.AddScoped<IMealRepo, MealRepo>();
            services.AddScoped<IDiaryRepo, DiaryRepo>();
            services.AddControllers();
            // Used for swagger, uncomment to use swagger ui 
            //services.AddSwaggerGen();
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "../../mfg_website/dist";
            });
            
        }
        
        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            
            
            app.UseCors("FoodAPIPolicy");

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
            // Used to connect the front end (start it automatically when starting .net). Comment out to use swagger
             app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "../../mfg_website";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
             
            //Swagger configuration
            /*
            HttpConfiguration config = new HttpConfiguration();
            SwaggerConfig.Register(config);
            app.UseSwagger();  
            app.UseSwaggerUI(c => { c.SwaggerEndpoint("/swagger/v1/swagger.json", "macro-for-geeks API");  
            });  
            */
            
        }
    }
}