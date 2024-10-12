using Microsoft.EntityFrameworkCore;
using TasksManager.Model;

namespace TasksManager.DataContext
{
    public class MySqlDbContext : DbContext
    {
        public DbSet<Goal> Goals { get; set; }
        public MySqlDbContext(DbContextOptions<MySqlDbContext> options) : base(options) { }
    }
}
