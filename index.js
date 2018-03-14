const
    express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    ejsLayouts = require('express-ejs-layouts'),
    booksRouter = require('./routes/books'),
    PORT = 3000

mongoose.connect('mongodb://localhost/book-site', (err) => {
    console.log(err) || "Connected to MongoDB"
})

app.listen(PORT, (err) => {
    console.log(err || `Console running on port ${PORT}`)
})