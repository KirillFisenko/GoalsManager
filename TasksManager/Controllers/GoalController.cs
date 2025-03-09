using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using TasksManager.Model;
using TasksManager.Redis;
using TasksManager.Services;

namespace TasksManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GoalController(IGoalServices goalServices, RedisCacheService redisCacheService, GoalsCache goalsCache) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAll()
        {
            var cachedData = redisCacheService.Get(RedisCacheService.RedisCacheKey);
            var goals = new List<Goal>();
            if (!string.IsNullOrEmpty(cachedData))
            {
                goals = JsonSerializer.Deserialize<List<Goal>>(cachedData);
            }
            else
            {
                goals = goalServices.GetAll();
                var goalsJson = JsonSerializer.Serialize(goals);
                redisCacheService.Set(RedisCacheService.RedisCacheKey, goalsJson);
            }
            return Ok(goals);
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
            goalsCache.RemoveCache();
            goalsCache.UpdateCache();
            return goalAdd ? Ok(goal) : Conflict("Задача с таким id уже существует");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var goalDel = goalServices.Delete(id);
            goalsCache.RemoveCache();
            goalsCache.UpdateCache();
            return goalDel ? Ok(goalDel) : NotFound("id не найден");
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Goal newGoal)
        {
            var goalUpdate = goalServices.Update(id, newGoal);
            goalsCache.RemoveCache();
            goalsCache.UpdateCache();
            return goalUpdate ? Ok(goalUpdate) : NotFound("id не найден");
        }
    }
}
