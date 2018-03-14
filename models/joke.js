const
    mongoose = require('mongoose'),
    bookSchema = new mongoose.Schema({
        author: String,
        title: String,
        datePublished: Number
    })

const Book = mongoose.model('Book', bookSchema)

module.exports = Book 