'use strict';

const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/finalboss');

const Book = Mongoose.model('Book', {
    title: String,
    description: String,
    author: String,
    price: Number,
    rank: Number,
    votes: Number,
    images: [String],
    informations: String,
});

let book = new Book({
    title: 'String',
    description: 'String',
    author: 'String',
    price: 123,
    rank: 1,
    votes: 1,
    images: ['String'],
    informations: 'String',
});

book.save();
