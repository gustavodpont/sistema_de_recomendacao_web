'use strict';

const Mongoose = require('mongoose');

exports.register = function (server, options, next) {

    let models = [];
    models['Book'] = Mongoose.model('Book', {
        title: String,
        description: String,
        author: String,
        price: Number,
        rank: Number,
        votes: Number,
        images: [String],
        informations: String,
    });

    server.decorate('server', 'models', models);
    server.decorate('request', 'models', models);

    next();
};

exports.register.attributes = {
    name: 'finalboss-models',
    version: '0.0.1'
};
