using MySql.Data.MySqlClient;
using TasksManager.Model;

namespace TasksManager.Services
{
    public class GoalAdoNetServices(string connectionString) : IGoalServices
    {
        public List<Goal> GetAll()
        {
            var goals = new List<Goal>();
            using var connection = new MySqlConnection(connectionString);
            connection.Open();
            using var command = connection.CreateCommand();
            command.CommandText = "SELECT * FROM goals;";
            using var reader = command.ExecuteReader();
            while (reader.Read())
            {
                goals.Add(new Goal()
                {
                    Id = reader.GetInt32(0),
                    Name = reader.GetString(1),
                    Description = reader.GetString(2),
                    Status = (Status)reader.GetInt32(3)
                });
            }
            return goals;
        }

        public Goal? Get(int id)
        {
            var goal = new Goal();
            using var connection = new MySqlConnection(connectionString);
            connection.Open();
            using var command = connection.CreateCommand();
            command.CommandText = "SELECT * FROM goals WHERE id = @id;";
            command.Parameters.AddWithValue("@id", id);
            using var reader = command.ExecuteReader();
            while (reader.Read())
            {
                goal.Id = reader.GetInt32(0);
                goal.Name = reader.GetString(1);
                goal.Description = reader.GetString(2);
                goal.Status = (Status)reader.GetInt32(3);
            }
            return goal;
        }

        public bool Add(Goal goal)
        {
            using var connection = new MySqlConnection(connectionString);
            connection.Open();
            using var command = connection.CreateCommand();
            string sql = "INSERT INTO goals (name, description, status) VALUES (@name, @description, @status);";
            command.CommandText = sql;
            command.Parameters.AddWithValue("@name", goal.Name);
            command.Parameters.AddWithValue("@description", goal.Description);
            command.Parameters.AddWithValue("@status", Convert.ToInt32(goal.Status));
            return command.ExecuteNonQuery() > 0;
        }

        public bool Delete(int id)
        {
            using var connection = new MySqlConnection(connectionString);
            connection.Open();
            using var command = connection.CreateCommand();
            string sql = "DELETE FROM goals WHERE id = @id;";
            command.CommandText = sql;
            command.Parameters.AddWithValue("@id", id);
            return command.ExecuteNonQuery() > 0;
        }

        public bool Update(int id, Goal newGoal)
        {
            using var connection = new MySqlConnection(connectionString);
            connection.Open();
            using var command = connection.CreateCommand();
            string sql = "UPDATE goals SET name = @name, description = @description, status = @status WHERE id = @id;";
            command.CommandText = sql;
            command.Parameters.AddWithValue("@id", id);
            command.Parameters.AddWithValue("@name", newGoal.Name);
            command.Parameters.AddWithValue("@description", newGoal.Description);
            command.Parameters.AddWithValue("@status", Convert.ToInt32(newGoal.Status));
            return command.ExecuteNonQuery() > 0;
        }
    }
}
