const {getAllUsers} = require('../modules/users');
const usersData = require('../data/users.json');

const getMain = (req, res) => { // Главная
    res.json('Hello, world!');
};

const getUsers = (req, res) => { // Получение всех читателей
    res.setHeader('Content-Type', 'application/json');
    res.write(getAllUsers());
    res.end()
};

const getUser = (req, res) => { // Получение читателеля по id
    const userId = parseInt(req.params.user_id);
    const user = usersData.find(user => user.user_id === userId);
  
    if (user) {
      res.json(user);
      res.end()
    } else {
      res.status(404).json({ message: 'Пользователь не найден' });
      res.end()
    }
  };

const createUser = (req, res) => {             // Создание нового читателя
    const newUser = createNewUser(request.body);
    usersData.push(newUser);
    res.status(201).json(newUser);
};

const updateUser = (request, response) => {             // Обновление данных читателя
    const { user_id } = request.params;
    response.status = 200;
    response.statusMessage = 'OK';
    response.header = 'Content-Type: text/plain';
    response.setHeader('Content-Type', 'text/plain');
    response.write(`New info for user with id: ${user_id}`);
    response.end();
};

const deleteUser = (request, response) => {             // Удаление читателя
    const { user_id } = request.params;
    response.status = 200;
    response.statusMessage = 'OK';
    response.header = 'Content-Type: text/plain';
    response.setHeader('Content-Type', 'text/plain');
    response.write(`You delete of user with id: ${user_id}`);
    response.end();
};

module.exports = {
    getMain,
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
