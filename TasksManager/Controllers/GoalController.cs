using Microsoft.AspNetCore.Mvc;
using TasksManager.Model;

namespace TasksManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GoalController : ControllerBase
    {
        private static readonly List<Goal> goals = [];

        [HttpGet]
        public List<Goal> GetAll()
        {
            return goals;
        }

        [HttpGet("{id}")]
        public Goal Get(int id)
        {
            return goals.FirstOrDefault(goal => goal.Id == id);
        }

        [HttpPost]
        public void Add(Goal goal)
        {
            goals.Add(goal);
        }

        [HttpDelete]
        public void Delete(int id)
        {
            var goal = goals.FirstOrDefault(goal => goal.Id == id);
            goals.Remove(goal);
        }

        [HttpPut]
        public void Update(int id, Goal newGoal)
        {
            var goal = goals.FirstOrDefault(goal => goal.Id == id);
            goal.Name = newGoal.Name;
            goal.Description = newGoal.Description;
            goal.Statuses = newGoal.Statuses;
        }
    }
}
