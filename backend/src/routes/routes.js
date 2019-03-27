const express = require('express');
const router = express.Router();
const LOGGER = require('log4js').getLogger();
const userController = require('../controller/userController');

router.post('/createUser', userController.createUser);

module.exports = router;