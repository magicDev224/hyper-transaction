const express = require('express');
routes = express.Router();

//handler
const addTransactionHandler = require('./routers/addTransactionHandler');
const getTransactionHandler = require('./routers/getTransactionHandler');

routes.post('/add-tuna', addTransactionHandler);
routes.post('/get-tuna', getTransactionHandler);

module.exports = routes;