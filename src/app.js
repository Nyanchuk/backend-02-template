const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/users');
const logger = require('./middleware/logger');

const app = express();

dotenv.config();

const { PORT, API_URL, MONGO_URL } = process.env;

mongoose.connect(MONGO_URL).then (() => 
console.log("Connected to Mongo!")).catch((error) => console.log("[MONGO_CONNECTION]", error));

app.use(cors);
app.use(logger);
app.use(bodyParser.json());
app.use(userRouter);

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`)
});
