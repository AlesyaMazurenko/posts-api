const express = require('express');

const app = express();
const { router } = require('./router/index');

// app.use('/', (req, res, next) => {
//     console.log('hello from middleware');
//     next();
// });

// app.use('/', (req, res, next) => {
//     console.log('hello from middleware 2');
//     res.end('finish');
// } )

app.use('/', router);

module.exports = app;