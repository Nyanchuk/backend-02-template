const http = require('http');
const url = require('url');  // Необходимо добавить импорт модуля url
const getUsers = require('./modules/users');

const server = http.createServer((request, response) => {
    const queryObject = url.parse(request.url, true).query;

    if ('hello' in queryObject) {
        if (!queryObject.hello) {               // Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** "Enter a name", код ответа 400
            response.statusCode = 400;
            response.end('Enter a name');
        } else {                                // Ответом на запрос `?hello=<name>` должна быть **строка** "Hello, <name>.", код ответа 200
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.write(`Hello, ${queryObject.hello}.`);
            response.end();
        }
    } else if (request.url === '/') {
        response.status = 200;
        response.statusMessage = 'OK';
        response.header = 'Content-Type: text/plain';
        response.write('Hello, world!');
        response.end();
    } else if (request.url === '/?users') {     // Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200
      response.status = 200;
      response.statusMessage = 'OK';
      response.header = 'Content-Type: application/json';
      response.write(getUsers());
      response.end();
      return;
    } else {
        response.statusCode = 500;
        response.end();
    }
});

server.listen(3003, () => {
    console.log('Сервер запущен по адресу http://127.0.0.1:3003')
})
    // Написать обработчик запроса:
    // + Ответом на запрос `?hello=<name>` должна быть **строка** "Hello, <name>.", код ответа 200
    // + Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** "Enter a name", код ответа 400
    // + Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200
    // + Если никакие параметры не переданы, то ответ **строка** "Hello, World!", код ответа 200
    // + Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500