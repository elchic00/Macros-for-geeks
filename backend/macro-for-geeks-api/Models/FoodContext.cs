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
        public virtual DbSet<Mealtime>? Mealtimes { get; set; }
        public virtual DbSet<User>? Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlite("Data source=./Food.db");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Diary>(entity =>
            {
                entity.HasKey(e => e.Entryid);

                entity.ToTable("Diary");

                entity.HasIndex(e => e.Entryid, "IX_Diary_entryid")
                    .IsUnique();

                entity.Property(e => e.Entryid).HasColumnName("entryid");

                entity.Property(e => e.Servings).HasColumnName("servings");

                /*entity.HasOne(d => d.MealTimeNavigation)
                    .WithMany(p => p.Diaries)
                    .HasForeignKey(d => d.MealTime)
                    .OnDelete(DeleteBehavior.SetNull);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Diaries)
                    .HasForeignKey(d => d.UserId);*/
            });

            modelBuilder.Entity<Mealtime>(entity =>
            {
                entity.HasKey(e => e.Meal);

                entity.ToTable("Mealtime");

                entity.Property(e => e.Meal).HasColumnName("meal");
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");

                entity.HasIndex(e => e.Id, "UID_index");

                entity.Property(e => e.Age).HasColumnName("age");

                entity.Property(e => e.CarbohydrateGoal).HasColumnName("carbohydrate goal");

                entity.Property(e => e.Email).IsRequired();

                entity.Property(e => e.FatGoal).HasColumnName("fat goal");

                entity.Property(e => e.Feet).HasColumnName("feet");
                
                entity.Property(e => e.Inches).HasColumnName("inches");
                
                entity.Property(e => e.Name).IsRequired();

                entity.Property(e => e.Picture).HasColumnName("picture");

                entity.Property(e => e.ProteinGoal).HasColumnName("protein goal");

                entity.Property(e => e.Weight).HasColumnName("weight");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
