'use strict';

const Joi = require('joi');
const mongoose = require('mongoose');
const Boom = require('boom');

exports.register = function (server, options, next) {

    const routes = [
        {
            method: 'POST',
            path: '/api/register',
            handler: createUserHandler,
            config: {
                validate: {
                    payload: {
                        email: Joi.string().email().required(),
                        password: Joi.string().min(5).max(50).required()
                    }
                }
            }
        }
    ];

    server.route(routes);

    function createUserHandler(request, reply) {

        request.models.User.create(request.payload)
            .then((entity) => {

               return reply(entity);
            })
            .catch((err) => {

                return reply(Boom.wrap(err));
            });
    }

  next();
};

exports.register.attributes = {
    name: 'userController',
    version: '0.0.1'
};