const express = require('express');
const v1Router = require('./v1'); // Assuming v1 router is in the same directory

const apiRouter = express.Router();

apiRouter.use('/v1', v1Router);

module.exports = apiRouter;