using TasksManager.DataContext;
using TasksManager.Model;

namespace TasksManager.Services
{
    public class GoalEFService : IGoalServices
    {
        private readonly MySqlDbContext context;

        public GoalEFService(MySqlDbContext context)
        {
            this.context = context;
        }

        public List<Goal> GetAll()
        {
            return context.Goals.ToList();
        }

        public Goal? Get(int id)
        {
            return context.Goals.FirstOrDefault(goal => goal.Id == id);
        }

        public bool Add(Goal goal)
        {
            var goalId = context.Goals.FirstOrDefault(g => g.Id == goal.Id);
            if (goalId == null)
            {
                context.Goals.Add(goal);
                context.SaveChanges();
                return true;
            }
            return false;
        }

        public bool Delete(int id)
        {
            var goal = context.Goals.FirstOrDefault(goal => goal.Id == id);
            if (goal != null)
            {
                context.Goals.Remove(goal);
                context.SaveChanges();
                return true;
            }
            return false;
        }

        public bool Update(int id, Goal newGoal)
        {
            var goal = context.Goals.FirstOrDefault(goal => goal.Id == id);
            if (goal != null)
            {
                goal.Name = newGoal.Name;
                goal.Description = newGoal.Description;
                goal.Status = newGoal.Status;
                context.SaveChanges();
                return true;
            }
            return false;
        }
    }
}
