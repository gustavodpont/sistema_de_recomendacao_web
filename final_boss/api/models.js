'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

exports.register = function (server, options, next) {

    let models = [];
    models['Book'] = Mongoose.model('Book', {
        title: String,
        description: String,
        author: String,
        price: Number,
        rank: Number,
        votes: Number,
        image: String,
        informations: String,
    });

    const userSchema = new Schema({
        email: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            bcrypt: true
        },
        authentications: [{
            strategy: String,
            agent: String,
            ip: String,
        }]
    })
    userSchema.plugin(require('mongoose-bcrypt'), { rounds: 8 });
    userSchema.plugin(require('mongoose-delete'), { deletedBy : true, deletedAt: true, overrideMethods: true });
    userSchema.plugin(require('mongoose-beautiful-unique-validation'));

    models['User'] = Mongoose.model('User', userSchema)

    server.decorate('server', 'models', models);
    server.decorate('request', 'models', models);

    next();
};

exports.register.attributes = {
    name: 'finalboss-models',
    version: '0.0.1'
};
