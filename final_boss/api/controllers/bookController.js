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
                auth: {
                    strategy: 'jwt',
                    mode: 'try'
                },
                cors: true
            },
            handler: (request, reply) => {

                request.models.Book.find({})
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
            path: '/api/books/find',
            config: {
                auth: {
                    strategy: 'jwt',
                    mode: 'try'
                },
                validate: {
                    query: {
                        category: Joi.string().required()
                    }
                },
                cors: true
            },
            handler: (request, reply) => {

                request.models.Book.find({ category: request.query.category })
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
        }
    ]

    server.route(routes);

    next();
};

exports.register.attributes = {
    name: 'bookController',
    version: '0.0.1'
};