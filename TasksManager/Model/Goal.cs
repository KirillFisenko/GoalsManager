namespace TasksManager.Model
{
    public class Goal
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Statuses Statuses { get; set; }
    }
}
