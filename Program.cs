using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace react_dotnet_example
{
    public class Program
    {
        public static void Main(string[] args)
        {
            using (var db = new App.DatabaseContext())
            {
                var users = db.Users;
                foreach(var user in users)
                {
                    Console.WriteLine("Order: order.Created");
                    Console.WriteLine("{0} {1} {2}", user.firstName, user.lastName, user.email);
                }
                
            }
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
            // builder.services.AddTransient<MySqlConnection>(_ =>
            // new MySqlConnection(builder.Configuration.GetConnectionString["Default"]));
    }
}
