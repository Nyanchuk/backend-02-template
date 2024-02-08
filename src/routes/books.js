const router = require('express').Router();
const { getBooks, getUserBook, createUserBook, updateUserBook, deleteUserBook } = require('../controllers/books');

router.get('/books', getBooks);                                     // Получение всех книг
router.get('/users/:user_id/books/:book_id', getUserBook);          // Получение книги у читателя
router.post('/users/:user_id/books/:book_id', createUserBook);      // Добавление новой книги у читателя
router.patch('/users/:user_id/books/:book_id', updateUserBook);     // Обновление данных книги у читателя
router.delete('/users/:user_id/books/:book_id', deleteUserBook);    // Удаление книги у читателя

module.exports = router;
