'use strict';

const Joi = require('joi');
const Boom = require('boom');
const Mongoose = require('mongoose');

exports.register = function(server, options, next){

    const calculateLocalSimilarity = function(a1, a2, vMax, vMin) {
        if (a2 > a1) {
            const tmp = a1;
            a1 = a2;
            a2 = tmp;
        }

        return (1.0 - (a1 - a2) / (vMax - vMin));
    };

    const RBC = function(data, string, cb) {
        const weights = {
            'votes': 4.0,
            'rank': 6.0,
            'title': 15.0,
            'category': 10.0,
            'total': 35.0
        }

        const weightVotes = {
            'below10': 0.0,
            'between11n50': 0.6,
            'above51': 1.0
        }

        const weightRank = {
            'between0n1': 0.0,
            'between1n2': 0.25,
            'between2n3': 0.5,
            'between3n4': 0.75,
            'between4n5': 1.0
        }

        const weightTitle = {
            'notContain': 0.0,
            'partialyContain': 0.8,
            'equals': 1.0
        }

        const weightCategory = {
            'notContain': 0.0,
            'partialyContain': 0.8,
            'equals': 1.0
        }

        let books = [];
        data.forEach((val, key) => {

            let similarityVotes = 0.0;
            let similarityRank = 0.0;
            let similarityTitle = 0.0;
            let similarityCategory = 0.0;
            let a1;
            let a2;

            /** Similaridade dos votos */
            a1 = weightVotes.below10

            if (val.votes <= 10) {
                a2 = weightVotes.below10
            } else if (val.votes > 10 && val.votes <= 50) {
                a2 = weightVotes.between11n50
            } else {
                a2 = weightVotes.above51
            }

            similarityVotes = (weights.votes * calculateLocalSimilarity(a1, a2, weightVotes.below10, weightVotes.above51));
            /** Similaridade dos votos */

            /** Similaridade do rank */
            a1 = weightRank.between0n1;

            if (val.rank <= 1) {
                a2 = weightRank.between0n1;
            } else if (val.rank > 1 && val.rank <= 2) {
                a2 = weightRank.between1n2;
            } else if (val.rank > 2 && val.rank <= 3) {
                a2 = weightRank.between2n3;
            } else if (val.rank > 3 && val.rank <= 4) {
                a2 = weightRank.between3n4;
            } else if (val.rank > 4 && val.rank <= 5) {
                a2 = weightRank.between4n5;
            }

            similarityRank = (weights.rank * calculateLocalSimilarity(a1, a2, weightRank.between0n1, weightRank.between4n5));
            /** Similaridade do rank */

            /** Similaridade do titulo */
            let titleRegex = new RegExp('.*' + val.title + '.*');
            a1 = weightTitle.notContain;

            if (string == val.title) {
                a2 = weightTitle.equals
            } else if (string.match(titleRegex) !== null) {
                a2 = weightTitle.partialyContain
            } else {
                a2 = weightTitle.notContain
            }
            similarityTitle = (weights.title * calculateLocalSimilarity(a1, a2, weightTitle.notContain, weightTitle.equals))
            /** Similaridade do titulo */

            /** Similaridade da categoria */
            let categoryRegex = new RegExp('.*' + val.category + '.*');
            a1 = weightCategory.notContain;

            if (string == val.category) {
                a2 = weightCategory.equals
            } else if (string.match(categoryRegex) !== null) {
                a2 = weightCategory.partialyContain
            } else {
                a2 = weightCategory.notContain
            }
            similarityCategory = (weights.category * calculateLocalSimilarity(a1, a2, weightCategory.notContain, weightCategory.equals))
            /** Similaridade da categoria */

            let similarityTotal = ((similarityVotes + similarityRank + similarityTitle + similarityCategory) / weights.total);

            let found = false;
            let i = 0;
            for (let book of books) {
                if (similarityTotal > book.similarityTotal) {
                    val.similarityTotal = similarityTotal;
                    books.splice(i, 0, val);
                    found = true;
                    break;
                }
                i++;
            }
            if (!found) {
                let index = (books.length);
                books[index] = val;
                books[index].similarityTotal = similarityTotal;
            }
        });

        return cb(books);
    }

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

                request.models.Book.find()
                    .then((books) => {

                        if (!books) {
                            return reply(Boom.notFound());
                        }

                        RBC(books, request.query.category, (data) => {
                            return reply(data);
                        });
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