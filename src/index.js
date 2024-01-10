const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./routes/users');                       // Подключение динамического роута
const app = express();                                              // Подключение Express

dotenv.config();

const {                                                             // Настройка порта
    PORT = 3005,
    API_URL = 'http://127.0.0.1', 
} = process.env;

app.use(userRouter);                                                // Слушает роуты

app.listen(PORT, () => {                                            // Слушаем порт
    console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`)
});











// const http = require('http');
// const url = require('url');  // Необходимо добавить импорт модуля url
// const getUsers = require('./modules/users');

// const server = http.createServer((request, response) => {
//     const queryObject = url.parse(request.url, true).query;

//     if ('hello' in queryObject) {
//         if (!queryObject.hello) {               // Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** "Enter a name", код ответа 400
//             response.statusCode = 400;
//             response.setHeader('Content-Type', 'text/plain');
//             response.end('Enter a name');
//         } else {                                // Ответом на запрос `?hello=<name>` должна быть **строка** "Hello, <name>.", код ответа 200
//             response.statusCode = 200;
//             response.setHeader('Content-Type', 'text/plain');
//             response.write(`Hello, ${queryObject.hello}.`);
//             response.end();
//         }
//     } else if (request.url === '/') {
//         response.status = 200;
//         response.statusMessage = 'OK';
//         response.header = 'Content-Type: text/plain';
//         response.setHeader('Content-Type', 'text/plain');
//         response.write('Hello, world!');
//         response.end();
//     } else if (request.url === '/?users') {     // Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200
//       response.status = 200;
//       response.statusMessage = 'OK';
//       response.header = 'Content-Type: application/json';
//       response.setHeader('Content-Type', 'application/json');
//       response.write(getUsers());
//       response.end();
//       return;
//     } else {
//         response.statusCode = 500;
//         response.setHeader('Content-Type', 'text/plain');
//         response.end();
//     }
// });

// server.listen(3003, () => {
//     console.log('Сервер запущен по адресу http://127.0.0.1:3003')
// })
