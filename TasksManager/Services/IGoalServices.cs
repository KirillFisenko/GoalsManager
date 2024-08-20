using TasksManager.Model;

namespace TasksManager.Services
{
    public interface IGoalServices
    {
        bool Add(Goal goal);
        bool Delete(int id);
        Goal? Get(int id);
        List<Goal> GetAll();
        bool Update(int id, Goal newGoal);
    }
}