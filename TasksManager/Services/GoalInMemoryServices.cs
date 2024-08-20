using TasksManager.Model;

namespace TasksManager.Services
{
    public class GoalInMemoryServices : IGoalServices
    {
        private static readonly List<Goal> goals = [
            new Goal() { Id = 1, Name = "Задача 1", Description = "Описание 1", Status = Status.New },
            new Goal() { Id = 2, Name = "Задача 2", Description = "Описание 2", Status = Status.New },
            new Goal() { Id = 3, Name = "Задача 3", Description = "Описание 3", Status = Status.New },
            new Goal() { Id = 4, Name = "Задача 4", Description = "Описание 4", Status = Status.New },
            new Goal() { Id = 5, Name = "Задача 5", Description = "Описание 5", Status = Status.New }
            ];

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
