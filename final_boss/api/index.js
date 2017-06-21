'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ host: 'localhost', port: 3000 });

server.register([
    {
        register: require('good')

    },
    {
        register: require('./mongoose')
    },
    {
        register: require('./models')
    },
    {
        register: require('hapi-auth-jwt2')
    },
    {
        register: require('./controllers/authenticationController')
    },
    {
        register: require('./controllers/userController')
    }    ,
    {
        register: require('./controllers/bookController')
    }
], (err) => {

    if (err) {
        console.log(err);
    }

    server.start(() => {

        console.log(`Server running at: ${server.info.uri}`);
    });

    server.on('response', (request) => {

        console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode);
    });
});
