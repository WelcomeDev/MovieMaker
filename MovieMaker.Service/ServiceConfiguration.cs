using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

using MovieMaker.Service.Controllers.Event.Dto;
using MovieMaker.Service.Model.Events.Bll;
using MovieMaker.Service.Model.Events.Di;
using MovieMaker.Service.Provider.Bll.Event;
using MovieMaker.Service.Provider.Di;

namespace MovieMaker.Service
{
    public static class ServiceConfiguration
    {
        public static void ConfigureMapper(IServiceCollection services)
        {
            services.AddAutoMapper(config =>
            {
                config.CreateMap<IEvent, EventDto>();
                config.CreateMap<UpdateEventDto, UpdateEventParams>();
                config.CreateMap<CreateEventDto, CreateEventParams>();
            });
        }

        public static void ConfigureProvider(IServiceCollection services)
        {
            services.AddSingleton<IEventProvider, EventsProvider>();
            services.AddSingleton<IEventProvider, EventsProvider>();
            services.AddSingleton<IEventProvider, EventsProvider>();
        }
    }
}
