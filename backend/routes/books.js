const express = require('express');
const router = express.Router();
const controller = require('../controller/books')

router
    .get('/', controller.getAllBooks)
    .post('/', controller.createBook)
    .get('/:id', controller.getBookById)
    .put('/:id', controller.updateBook)
    .delete('/:id', controller.deleteBook)

module.exports = router;