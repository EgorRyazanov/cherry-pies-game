Для запуска бд нужен ```docker-compose up -d```
после запуска приложение автоматически создаст таблицы.

# Создать топики
```json
{
    "title": "Интересно1",
    "likes_count": 10,
    "text":"asd",
    "description": "Adasdasd"
}
```
ANSWER
```json
{
    "id": 4,
    "title": "Интересно1",
    "text": "asd",
    "description": "Adasdasd",
    "likes_count": 10
}
```


# Получить топики
GET 
http://localhost:3001/api/topic

```json
[
    {
        "id": 1,
        "title": "Новая игра",
        "text": "Прикольно что все работает"
    },
    {
        "id": 2,
        "title": "О чем игра",
        "text": "Прикольно что все работает"
    }
]
```
        

# Изменить топик

PUT 
http://localhost:3001/api/topic

```json
{
    "id": 1,
    "title": "12312312312312312312313123123asd",
    "likes_count": 10,
    "text":"asd",
    "description": "Adasdasd"
}
```

ANSWER
```json
{
    "id": 1,
    "title": "Интересно1",
    "text": "Супер, рассказ про игру",
    "createdAt": "2023-12-10T01:21:58.922Z",
    "updatedAt": "2023-12-10T01:22:29.882Z"
}
```

# Добавить коментарий к топику
POST
http://localhost:3001/api/comment?id=1

```json
{
    "topic_id": 1,
    "title": "Интересно1",
    "likes_count": 11231,
    "comment": "asd"
}
```
ANSWER
```json
{
    "id": 7,
    "topic_id": 1,
    "title": "Интересно1",
    "comment": "asd",
    "likes_count": 11231
}
```

# Получить коментарии к топику
GET
http://localhost:3001/api/comment?id=1


ANSWER
```json
[
    {
        "id": 1,
        "title": "Интересно1",
        "comment": "asd",
        "likes_count": 11231,
        "topic_id": 1,
        "createdAt": "2023-12-10T03:34:50.924Z",
        "updatedAt": "2023-12-10T03:34:50.924Z"
    },
    {
        ....
    },
    ....
]
```


```js
// force - при каждом запуске создаст новую бд
// alter - добавит если не было бд
sequelize.sync({ alter: true }).then(() => {
  console.log('База данных готова к использованию');
}).catch(err => {
  console.error('Ошибка создания таблиц:', err);
});
```
