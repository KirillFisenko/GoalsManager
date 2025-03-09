using System.Text.Json;
using TasksManager.Services;

namespace TasksManager.Redis
{
    public class GoalsCache(IGoalServices goalServices, RedisCacheService redisCacheService)
    {
        public void RemoveCache()
        {
            try
            {
                redisCacheService.Remove(RedisCacheService.RedisCacheKey);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void UpdateCache()
        {
            try
            {
                var goals = goalServices.GetAll();
                var goalsJson = JsonSerializer.Serialize(goals);
                redisCacheService.Set(RedisCacheService.RedisCacheKey, goalsJson);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
