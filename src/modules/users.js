const fs = require('fs');
const path = require('path');

// Просмотр всех читателей
const getAllUsers = () => {
    const filePath = path.join(__dirname, '../data/users.json')
    return fs.readFileSync(filePath)
}

// Создание нового читателя
const createNewUser = (userData) => {
    // Генерируем уникальный идентификатор для нового пользователя
    const newUserId = generateUniqueId(usersData);

    // Создаем объект для нового пользователя на основе переданных данных
    const newUser = {
        user_id: newUserId,
        name: userData.name,
        surname: userData.surname,
        username: userData.username,
        books: [] // Создаем пустой массив книг для нового пользователя
    };

    // Добавляем нового пользователя в массив или файл существующих пользователей
    const filePath = path.join(__dirname, '../data/users.json')
    const usersData = JSON.parse(fs.readFileSync(filePath));
    usersData.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(usersData));

    return newUser; // Возвращаем информацию о новом пользователе
};

// Создание id для нового читателя
const generateUniqueId = (usersData) => {
    if (usersData.length === 0) {
        return 1; // Если нет ни одного пользователя, начинаем с идентификатора 1
    } else {
        const lastUser = usersData[usersData.length - 1];
        return lastUser.user_id + 1; // Увеличиваем последний идентификатор на 1
    }
};

module.exports = {
    getAllUsers,
    createNewUser
};

