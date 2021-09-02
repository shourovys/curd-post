const express = require('express');
const { sineUp, login } = require('../controllers/AuthController');

const authRouter = express.Router();

authRouter.post('/sineUp', sineUp);

authRouter.post('/login', login);

module.exports = authRouter;
