const getAllUserBooks = require('../modules/books');


const getBooks = (request, response) => {               // Получение всех читателей
    response.status = 200;
    response.statusMessage = 'OK';
    response.header = 'Content-Type: application/json';
    response.setHeader('Content-Type', 'application/json');
    response.write(getAllUserBooks());
    response.end();
};

const getUserBook = (request, response) => {                // Получение читателя

};

const createUserBook = (request, response) => {             // Создание нового читателя

};

const updateUserBook = (request, response) => {             // Обновление данных читателя

};

const deleteUserBook = (request, response) => {             // Удаление читателя

};

module.exports = {
    getBooks,
    getUserBook,
    createUserBook,
    updateUserBook,
    deleteUserBook
}
