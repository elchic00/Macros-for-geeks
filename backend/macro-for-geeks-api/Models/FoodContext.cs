using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace macro_for_geeks_api.Models
{
    public partial class FoodContext : DbContext
    {
        public FoodContext()
        {
        }

        public FoodContext(DbContextOptions<FoodContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Diary>? Diaries { get; set; }
        public virtual DbSet<User>? Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlite("Data source = FoodConnectionString");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Diary>(entity =>
            {
                entity.HasKey(e => new { e.UserId, e.Date, e.Food });

                entity.ToTable("Diary");

                entity.HasIndex(e => new { e.UserId, e.Date }, "diary_index");

                entity.Property(e => e.MealTime).IsRequired();

                /*entity.HasOne(d => d.User)
                    .WithMany(p => p.Diaries)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull);*/
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.HasIndex(e => e.Id, "UserID_index");

                entity.Property(e => e.Email).IsRequired();

                entity.Property(e => e.Name).IsRequired();
                
                entity.Property(e => e.picture).IsRequired();
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
