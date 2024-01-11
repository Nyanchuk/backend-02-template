const router = require('express').Router();
const { getMain, getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users');

router.get('/', getMain);                                       // Главная
router.get('/users', getUsers);                                 // Получение читателей
router.get('/users/:user_id', getUser);                         // Получение одного читателя
router.post('/users', createUser);                              // Добавление нового читателя
router.patch('/users/:user_id', updateUser);                    // Обновление данных о читателе
router.delete('/users/:user_id', deleteUser);                   // Удаление читателя

module.exports = router;
