const express   = require('express');

const problemRouter = require('./problems.route');
const v1router = express.Router();

v1router.use('/problems',problemRouter);

module.exports = v1router;