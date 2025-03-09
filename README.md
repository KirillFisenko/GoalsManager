**GoalsManager** — это веб-приложение для планирования задач, разработанное с использованием ASP.NET Core для серверной части и React для клиентской части. 
В качестве базы данных используется MySQL, а для взаимодействия с базой данных применяется Entity Framework (EF).

## Технологии
- **Серверная часть**: ASP.NET Core
- **Клиентская часть**: React
- **База данных**: MySQL
- **ORM**: Entity Framework (EF)
  
## Основные функции
- **Создание задач**: Пользователи могут создавать новые задачи, указывая их название, описание и другие параметры.
- **Редактирование задач**: Возможность изменения существующих задач, включая их название, описание и другие параметры.
- **Удаление задач**: Пользователи могут удалять задачи, которые больше не нужны.
- **Изменение статусов задач**: Возможность изменения статуса задачи на "новая", "в работе", "завершена" или "отменена".
    
![image](https://github.com/user-attachments/assets/9712c2a7-e491-404d-9af8-97f3f196fe00)  

![image](https://github.com/user-attachments/assets/9bd247f3-aaaf-4a4a-b76a-36021bd4cffa)

![image](https://github.com/user-attachments/assets/d861a805-9452-4af4-91c2-7d3ac8d18889)

![image](https://github.com/user-attachments/assets/ae7bded8-395e-4c2d-83be-0a4ef9fbfef6)


## Установка и запуск
1) Выбрать мыльтизапуск двух приложений:
![image](https://github.com/user-attachments/assets/ab98977d-f0f1-4454-beab-24e1827b6dd1)

2) Скопировать себе файл по пути:  
*C:\Users\justi\source\repos\TasksManager\taskmanagerclient\.vscode*  
[launch.json](https://github.com/user-attachments/files/16540453/launch.json)

3) Настройте подключение к базе данных MySQL в файле *appsettings.json*.

4) Перейдите в директорию клиентской части и установите необходимые зависимости:
```
npm install
```
