# MovieMaker
## Как меня завести? Пособие для ИВТ 4-курс
### Фронт
1. открываем в консоли WebApp/webapp/
2. `npm i`. Может устанавливаться долго
3. `npm run start`. Оно подумает пару минут и запустится
### Бек
1. .net 6. Тоже через vs installer
2. открыть vs installer и проверить, установлено ли "ASP.NET and web development"
3. открыть Package Manager Console. View->Other-> Package Manager Console
  `update-database -context EventsDbContext`
  `update-database -context MailsDbContext`
  `update-database -context AuthDbContext`
4. запустить проект
5. радоваться жизни

Чтобы работало, нужно запустить сразу и фронт и бек

## Как я работаю?
Главная страница - для простых холопов, могут смотреть все
Если набрать url `/auth`, то кинет на страницу авторизации для одмена. После авторизации закинет в `manage`, который доступен только для бояр. Без авторизации туда не попасть
