using TasksManager.Model;

namespace TasksManager.Services
{
    public class GoalServices
    {
        private static readonly List<Goal> goals = [];

        public List<Goal> GetAll()
        {
            return goals;
        }

        public Goal Get(int id)
        {
            return goals.FirstOrDefault(goal => goal.Id == id);
        }

        public void Add(Goal goal)
        {
            goals.Add(goal);
        }

        public void Delete(int id)
        {
            var goal = goals.FirstOrDefault(goal => goal.Id == id);
            goals.Remove(goal);
        }

        public void Update(int id, Goal newGoal)
        {
            var goal = goals.FirstOrDefault(goal => goal.Id == id);
            goal.Name = newGoal.Name;
            goal.Description = newGoal.Description;
            goal.Statuses = newGoal.Statuses;
        }
    }
}
