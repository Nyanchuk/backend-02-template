// Файл роутов users
const router = require('express').Router();
const { getMain, getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users');
const { getBooks, getUserBook, createUserBook, updateUserBook, deleteUserBook } = require('../controllers/books');

router.get('/', getMain);                                       // Главная

router.get('/users', getUsers);                                 // Получение читателей
router.get('/users/:user_id', getUser);                         // Получение одного читателя
router.post('/users', createUser);                              // Добавление нового читателя
router.patch('/users/:user_id', updateUser);                    // Обновление данных о читателе
router.delete('/users/:user_id', deleteUser);                   // Удаление читателя


router.get('/books', getBooks);                                     // Получение всех книг
router.get('/users/:user_id/books/:book_id', getUserBook);          // Получение книги у читателя
router.post('/users/:user_id/books/:book_id', createUserBook);      // Добавление новой книги у читателя
router.patch('/users/:user_id/books/:book_id', updateUserBook);     // Обновление данных книги у читателя
router.delete('/users/:user_id/books/:book_id', deleteUserBook);    // Удаление книги у читателя

module.exports = router;
