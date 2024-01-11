const User = require('../modules/users');

// Главная
const getMain = (request, response) => {
    response.send('Hello, world!');
};

// Получим всех читателей
const getUsers = (request, response) => {
    User.find({})
      .then(user => {
        response.status(200).send(user);
      })
      .catch(e => {
        response.status(500).send(e.message);
      });
  }

// Получим читателя по ID
const getUser = (request, response) => {
    const { user_id } = request.params;
    User.findById(user_id).then(
      (user) => {
        if (!user) response.status(404).send("user not found")
        else response.status(200).send(user)
      }
    )
      .catch(e => {
        response.status(500).send(e.message);
      });
  }

// Создание нового читателя
const createUser = (request, response) => {
    const data = request.body;
    User.create(data)
      .then(
        user => {
          response.status(201).send(user);
        }
      )
      .catch(e => {
        response.status(500).send(e.message);
      });
  }

// Обновление данных читателя
const updateUser = (request, response) => {
    const { user_id } = request.params;
    const data = request.body;
    User.findByIdAndUpdate(user_id, data, { new: true, runValidators: true })
      .then(
        (user) => {
          if (!user) response.status(404).send("cannot update")
          else response.status(200).send(user)
        }
  
      )
      .catch(e => {
        response.status(500).send(e.message);
      });
}
  
// Удаление читателя
const deleteUser = (request, response) => {
    const { user_id } = request.params;
    User.findByIdAndDelete(user_id)
      .then(
        (user) => {
          if (!user) response.status(404).send("cannot delete")
          else response.status(200).send("sucess")
        }
      )
      .catch(e => {
        response.status(500).send(e.message);
      });
  }

module.exports = {
    getMain,
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}
