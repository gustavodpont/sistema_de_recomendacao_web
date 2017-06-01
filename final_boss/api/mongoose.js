'use strict';

const Mongoose = require('mongoose');

exports.register = function (server, options, next) {

    Mongoose.connect('mongodb://localhost:27017/finalboss');

    server.decorate('server', 'mongoose', Mongoose);
    server.decorate('request', 'mongoose', Mongoose);

    next();
};

exports.register.attributes = {
    name: 'finalboss-mongoose-connection',
    version: '0.0.1'
};
