using MovieMaker.Service.Model.Events.Bll;

namespace MovieMaker.Service.Provider.Bll.Event
{
    public static class EventsInitializer
    {
        internal static void Initialize(EventsDbContext context)
        {
            context.Events.AddRange(new[]
            {
                new MovieEvent
                {
                    Name = "Alkatras",
                    Description = "Клип DEMILICH на песню Alkatras",
                    VideoUrl = "https://disk.yandex.ru/client/disk/%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1/%D0%9A%D0%BB%D0%B8%D0%BF%D1%8B?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1%2F%D0%9A%D0%BB%D0%B8%D0%BF%D1%8B%2FALKATRAS_2.mp4",
                    IsShown = true,
                    Client = "DEMILICH",
                    Date = new DateTime(2021, 12, 31),
                    Category = "Клипы"
                },
                 new MovieEvent
                {
                    Name = "Wesson",
                    Description = "Клип DEMILICH на песню Wesson",
                    VideoUrl = "https://disk.yandex.ru/client/disk/%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1/%D0%9A%D0%BB%D0%B8%D0%BF%D1%8B?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1%2F%D0%9A%D0%BB%D0%B8%D0%BF%D1%8B%2FWESSON_FIN_FIN.mp4",
                    IsShown = true,
                    Client = "DEMILICH",
                    Date = new DateTime(2021, 12, 31),
                    Category = "Клипы"
                },
                  new MovieEvent
                {
                    Name = "Набор ЭРКУ",
                    Description = "Набор в ансамбль национального тацна \"ЭРКУ\"",
                    VideoUrl = "https://disk.yandex.ru/client/disk/%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1/%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1%2F%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%2FAdvertise_RQ.mp4",
                    IsShown = true,
                    Client = "ЭРКУ",
                    Date = new DateTime(2021, 12, 31),
                    Category = "Реклама"
                },
                   new MovieEvent
                {
                    Name = "Розыгрыш \"ЭРКУ\"",
                    Description = "Розыгрыш от ансамбля национального танца \"ЭРКУ\" в честь 3-х летия ансамбля",
                    VideoUrl = "https://disk.yandex.ru/client/disk/%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1/%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1%2F%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%2Fraffle.mp4",
                    IsShown = true,
                    Client = "ЭРКУ",
                    Date = new DateTime(2021, 12, 31),
                    Category = "Реклама"
                },
                   new MovieEvent
                {
                    Name = "Реклама SweetPods",
                    Description = "Реклама жидкостей собственного производства для вейпа от магазина SweetPods",
                    VideoUrl = "https://disk.yandex.ru/client/disk/%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1/%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1%2F%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%2FZhizhi_Hope_FIN.mp4",
                    IsShown = true,
                    Client = "SweetPods",
                    Date = new DateTime(2021, 12, 31),
                    Category = "Реклама"
                },
                    new MovieEvent
                {
                    Name = "Реклама BarberShop BILLIONAIRE",
                    Description = "Реклама барбершопа BILLIONAIRE",
                    VideoUrl = "https://disk.yandex.ru/client/disk/%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1/%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0?idApp=client&dialog=slider&idDialog=%2Fdisk%2F%D0%BA%D1%83%D1%80%D1%81%D1%87%20%D0%B2%D0%B5%D0%B1%2F%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0%2Fbarb_1.mp4",
                    IsShown = true,
                    Client = "BarberShop BILLIONAIRE",
                    Date = new DateTime(2021, 12, 31),
                    Category = "Реклама"
                },
            });

            context.SaveChanges();
        }
    }
}
