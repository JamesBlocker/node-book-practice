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
            res.direct("/books")
        })
    },

    edit: (req, res) => {
        Book.findById(req.params.id, (err, thatBook) => {
            res.render('books/edit', {book: thatBook })
        })
    },

    update: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, req.body, (err, updatedBook) => {
            res.redirect(`/books/${req.params.id}`)
        })
    },

    destroy: (req, res) => {
        Book.findByIdAndRemove(req.params.id, (err => {
            res.redirect("/books")
        }))
    }
}