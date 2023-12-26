const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const booksRoute = require('./routes/books');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json())

app.use('/books', booksRoute)

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send("Welcome to MERN Stack Project");
})

mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log("Database Connected");
    app.listen(process.env.PORT, () => {
        console.log("App is listening to port: ",process.env.PORT);
    })
})
.catch((error) => {
    console.log(error);
})