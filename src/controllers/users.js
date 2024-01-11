const User = require('../modules/users');

// Главная
const getMain = (req, res) => {
    res.send('Hello, world!');
};
 // Получение всех читателей
const getUsers = (req, res) => {
    res.send('Hello, users!');
};
 // Получение читателеля по id
const getUser = (req, res) => {
    const { user_id } = req.params;
    res.status(200);
    res.send(`User ${ user_id }`);
  };
// Создание нового читателя
const createUser = (req, res) => {            
    return User.create({ ...req.body }).then(
        (user) => { res.status(201).send(user) }
    )
};

const updateUser = (request, response) => {             // Обновление данных читателя

};

const deleteUser = (request, response) => {             // Удаление читателя

};

module.exports = {
    getMain,
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
