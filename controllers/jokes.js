const Book = require('../models/book.js')

module.exports = {
    index: (req, res) => {
        Book.find({}, (err, allBooks) => {
            res.render('books/index', { books: allBooks})
        })
    },

    show: (req, res) => {
        Book.findById(req.params.id, (err, theBook) => {
            res.render("books/show", { book: theBook})
        })
    },

    new: (req,res) => {
        res.render("books/new")
    },

    create: (req, res) => {
        Book.create(req.body, (err, newBook) => {
            res.direct("books")
        })
    },
}