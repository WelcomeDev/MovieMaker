using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

using static MovieMaker.Service.ServiceConfiguration;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "Сайт-визитка видеомейкера",
        Description = "Просто курсач",
        Contact = new OpenApiContact
        {
            Name = "Developer Contact",
            Email = "fedor.ishchenko.18@gmail.com",
            Url = new Uri("https://github.com/WelcomeDev"),
        }
    })
);

ConfigureMapper(builder.Services);
ConfigureProvider(builder.Services);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
