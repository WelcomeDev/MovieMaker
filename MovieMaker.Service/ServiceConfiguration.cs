using MovieMaker.Service.Controllers.Auth.Dto;
using MovieMaker.Service.Controllers.Event.Dto;
using MovieMaker.Service.Model.Auth;
using MovieMaker.Service.Model.Events.Bll;
using MovieMaker.Service.Model.Events.Di;
using MovieMaker.Service.Provider.Bll.Auth;
using MovieMaker.Service.Provider.Bll.Event;
using MovieMaker.Service.Provider.Bll.Mail;
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
                config.CreateMap<User, UserDto>();
            });
        }

        public static void ConfigureProvider(IServiceCollection services)
        {
            services.AddSingleton<IEventProvider, EventsProvider>();
            services.AddSingleton<IMailsProvider, MailsProvider>();
            services.AddSingleton<IAuthProvider, AuthProvider>();
        }
    }
}
