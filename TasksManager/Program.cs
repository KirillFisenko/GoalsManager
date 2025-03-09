using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;
using TasksManager.DataContext;
using TasksManager.Redis;
using TasksManager.Services;

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("MySQLConnectionStrings");
builder.Services.AddDbContext<MySqlDbContext>(options => options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

var redisConfiguration = ConfigurationOptions.Parse(builder.Configuration.GetSection("Redis:ConnectionStrings").Value!);
redisConfiguration.AbortOnConnectFail = false;
redisConfiguration.ConnectTimeout = 50;

builder.Services.AddSingleton<IConnectionMultiplexer>(sp =>
{
    return ConnectionMultiplexer.Connect(redisConfiguration);
});
builder.Services.AddSingleton<RedisCacheService>();
builder.Services.AddScoped<GoalsCache>();

builder.Services.AddScoped<IGoalServices, GoalEFService>();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(opt =>
{
    opt.AddPolicy("CorsPolicy", policy =>
    {
        policy.AllowAnyMethod()
              .AllowAnyHeader()
              .WithOrigins("http://localhost:5173");
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("CorsPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
