using Microsoft.EntityFrameworkCore;
using Contacts.API.Models.Contact;

namespace Contacts.API.Data
{
    public class ContactDbContext : DbContext
    {
        public ContactDbContext(
            DbContextOptions<ContactDbContext> options) : base(options)
        { }

        public DbSet<ContactModel> Contacts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ContactModel>()
                .HasKey(p => p.Id);
        }
    }
}