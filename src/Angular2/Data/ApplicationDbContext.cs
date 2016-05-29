using Angular2.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace Angular2.Data
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder
                .Entity<ApplicationUser>()
                .HasMany(au => au.Participants)
                .WithOne(p => p.User)
                .IsRequired();

            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);
        }

        public DbSet<Tournament> Tournaments { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Participant> Participants { get; set; }
        public DbSet<Team> Teams { get; set; }
    }

    public class Tournament
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public ICollection<Participant> Participants { get; set; }
    }

    public class Group
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Participant> Participants { get; set; }
    }

    public class Participant
    {
        public int Id { get; set; }
        public ApplicationUser User { get; set; }
        public string UserId { get; set; }

        public Team Team { get; set; }
        public int TeamId { get; set; }

        public Tournament Tournament { get; set; }
        public int TournamentId { get; set; }

        public Group Group { get; set; }
        public int? GroupId { get; set; }
    }

    public class Team
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Stadium { get; set; }
        public League League { get; set; }
    }

    public enum League
    {
        PremierLeague = 1
    }
}
