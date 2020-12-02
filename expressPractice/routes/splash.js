//const path = require('path');
const express = require('express');

//const rootDir = require('../helpers/path');

const router = express.Router();

const usersController = require('../controllers/users')

router.get('/', usersController.getUsers);

module.exports = router;