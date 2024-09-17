using Microsoft.AspNetCore.Mvc;
using TasksManager.Model;
using TasksManager.Services;

namespace TasksManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GoalController(IGoalServices goalServices) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(goalServices.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var goal = goalServices.Get(id);
            return goal != null ? Ok(goal) : NotFound("id не найден");
        }

        [HttpPost]
        public IActionResult Add(Goal goal)
        {
            bool goalAdd = goalServices.Add(goal);
            return goalAdd ? Ok(goal) : Conflict("Задача с таким id уже существует");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var goalDel = goalServices.Delete(id);
            return goalDel ? Ok(goalDel) : NotFound("id не найден");
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Goal newGoal)
        {
            var goalUpdate = goalServices.Update(id, newGoal);
            return goalUpdate ? Ok(goalUpdate) : NotFound("id не найден");
        }
    }
}
