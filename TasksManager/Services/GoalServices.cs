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

        public Goal? Get(int id)
        {
            return goals.FirstOrDefault(goal => goal.Id == id);
        }

        public bool Add(Goal goal)
        {
            var goalId = goals.FirstOrDefault(g => g.Id == goal.Id);
            if (goalId == null)
            {
                goals.Add(goal);
                return true;
            }
            return false;
        }

        public bool Delete(int id)
        {
            var goal = goals.FirstOrDefault(goal => goal.Id == id);
            if (goal != null)
            {
                goals.Remove(goal);
                return true;
            }
            return false;
        }

        public bool Update(int id, Goal newGoal)
        {
            var goal = goals.FirstOrDefault(goal => goal.Id == id);
            if (goal != null)
            {
                goal.Name = newGoal.Name;
                goal.Description = newGoal.Description;
                goal.Status = newGoal.Status;
                return true;
            }
            return false;
        }
    }
}
