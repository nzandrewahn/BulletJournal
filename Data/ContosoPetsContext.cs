using System;
using System.Collections.Generic;
using System.Text;

namespace BulletJournalBackend.Data
{
    public class ContosoPetsContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Order> Orders { get; set}
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductOrder> ProductOrders { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder options) 
        {
            optionsBuilder.UseSqliteServer("link to databse");
        }



    }
}
