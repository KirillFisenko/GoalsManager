using Microsoft.AspNetCore.Mvc;
using TasksManager.Model;
using TasksManager.Services;

namespace TasksManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GoalController(GoalServices goalServices) : ControllerBase
    {
        [HttpGet]
        public List<Goal> GetAll()
        {
            return goalServices.GetAll();
        }

        [HttpGet("{id}")]
        public Goal Get(int id)
        {
            return goalServices.Get(id);
        }

        [HttpPost]
        public void Add(Goal goal)
        {
            goalServices.Add(goal);
        }

        [HttpDelete]
        public void Delete(int id)
        {
            goalServices.Delete(id);
        }

        [HttpPut]
        public void Update(int id, Goal newGoal)
        {
            goalServices.Update(id, newGoal);
        }
    }
}
