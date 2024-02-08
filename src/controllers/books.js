const Book = require('../modules/books')

// Получение всех книг
const getBooks =  (request, response) => {
    //get all books
    Book.find({})
        .then(book => {
            response.status(200).send(book);
        })
        .catch(e => {
            response.status(500).send(e.message);
        });
}

// Получение книги по ID
const getUserBook = (request, response) => {
       const {book_id} = request.params;
       return Book.findById(book_id).then(
        (book) => {
        if (!book) response.status(404).send("book not found")
        else response.status(200).send(book)
       }

    ).catch(e =>  response.status(500).send(e.message))
}

// Создание книги
const createUserBook = (request, response) => {
    return Book.create({...request.body}).then(
        (book) => {response.status(201).send(book)}
        
    ).catch(e =>  response.status(500).send(e.message))
}

// Обновление данных книги по ID
const updateUserBook = (request, response) => {
    const {book_id} = request.params;
    return Book.findByIdAndUpdate(book_id, {...request.body}).then(
     (book) => {
        if (!book) response.status(404).send("cannot update")
        else response.status(200).send(book)
       }
 ).catch(e =>  response.status(500).send(e.message))
}

// Удаление книги по ID
const deleteUserBook = (request, response) => {
    const {book_id} = request.params;
    return Book.findByIdAndDelete(book_id).then(
     (book) => {
        if (!book) response.status(404).send("cannot delete")
        else response.status(200).send("sucess")
       }
 ).catch(e =>  response.status(500).send(e.message))
}

module.exports = {
    getBooks,
    getUserBook,
    createUserBook,
    updateUserBook,
    deleteUserBook
}
