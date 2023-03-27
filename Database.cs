using Microsoft.EntityFrameworkCore;
using react_dotnet_example.Models;
using System;
using System.Collections.Generic;

namespace App
{
  public class DatabaseContext : DbContext
  {
    public DbSet<UserModel> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      optionsBuilder.UseSqlite("Data Source=database.db");
    }
  }
}