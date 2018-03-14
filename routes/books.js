const
    express = require('express'),
    booksRouter = new express.Router()
    booksCntrl = require('../controllers/jokes.js')

booksRouter.get("/", booksCntrl.index)
booksRouter.post("/", booksCntrl.create)

booksRouter.get("/new", booksCntrl.new)
booksRouter.get("/:id/edit", booksCntrl.edit)

booksRouter.get("/:id", booksCntrl.show)
booksRouter.patch("/:id", booksCntrl.update)
booksRouter.delete("/:id", booksCntrl.destroy)

module.exports = booksRouter