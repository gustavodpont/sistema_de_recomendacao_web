'use strict';

const Joi = require('joi');
const Boom = require('boom');
const Mongoose = require('mongoose');

exports.register = function(server, options, next){

    const routes = [
        {
            method: 'GET',
            path: '/api/books',
            config: {
                cors: true
            },
            handler: (request, reply) => {

                request.models.Books.find({})
                    .then((books) => {

                        if (!books) {
                            return reply(Boom.notFound());
                        }

                        return reply(books);
                    })
                    .catch((err) => {

                        return reply(Boom.wrap(err));
                    })
            }
        },

        {
            method: 'GET',
            path: '/api/books/{bookId}',
            config: {
                validate: {
                    params: {
                        bookId: Joi.string().required()
                    }
                },
                cors: true
            },
            handler: (request, reply) => {

                request.models.Book.findById(Mongoose.Types.ObjectId(request.params.bookId))
                    .then((book) => {

                        if (!book) {
                            return reply(Boom.notFound());
                        }

                        return reply(book);
                    })
                    .catch((err) => {

                        return reply(Boom.wrap(err));
                    })
            }
        }
    ]

    server.route(routes);

    next();
};

exports.register.attributes = {
    name: 'bookController',
    version: '0.0.1'
};