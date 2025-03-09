using StackExchange.Redis;

namespace TasksManager.Redis
{
    public class RedisCacheService
    {
        public const string RedisCacheKey = "task_list";
        private readonly SemaphoreSlim mutex = new SemaphoreSlim(1, 1);
        private readonly IConnectionMultiplexer redis;
        public RedisCacheService(IConnectionMultiplexer redis)
        {
            this.redis = redis;
        }

        public void Set(string key, string value)
        {
            mutex.Wait();
            try
            {
                var db = redis.GetDatabase();
                db.StringSet(key, value);
            }
            catch (Exception)
            {
                throw;
            }
            finally
            {
                mutex.Release();
            }
        }

        public string Get(string key)
        {
            try
            {
                var db = redis.GetDatabase();
                return db.StringGet(key);
            }
            catch
            {
                return null;
            }
        }

        public void Remove(string key)
        {
            try
            {
                var db = redis.GetDatabase();
                db.KeyDelete(key);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}
