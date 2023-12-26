const Book = require('../model/books');
const mongoose = require('mongoose');

module.exports.createBook = async (req, res) => {
    try {
        const {title, author} = req.body;

        if (!title || !author) {
            return res.status(400).send({ message: 'Send all required fields' });
        }

        const book = await Book.create({
            title: title,
            author: author
        });

        return res.status(201).send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}

module.exports.getAllBooks = async (req, res) => {
    try{
        const books = await Book.find({});
        res.status(200).json({
            count: books.length,
            data: books
        });
    }
    catch(error){
        console.log(error);
        res.status(500).send({message: error.message});
    }
}

module.exports.getBookById = async (req, res) => {
    try{
        const { id } = req.params;
        const book = await Book.findById(id);
        res.status(200).json(book);
    }
    catch(error){
        console.log(error);
        res.status(500).send({message: error.message});
    }
}

module.exports.updateBook = async (req, res) => {
    try{
        const {title, author} = req.body;
        if(!title || !author){
            res.status(400).send({
                message: 'Send all required fields'
            })
        } 
        const { id } = req.params;

        const result = await Book.findByIdAndUpdate(id, req.body);

        if(!result){
            res.status(404).json({message: 'Book not found'});
        }
        res.status(200).send({message: 'Book updated successfully'});
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
}

module.exports.deleteBook = async (req, res) => {
    try{
        const { id } = req.params;

        const result = await Book.findByIdAndDelete(id, req.body);

        if(!result){
            res.status(404).json({message: 'Book not found'});
        }
        res.status(200).send({message: 'Book deleted successfully'});
    }
    catch(error){
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
}