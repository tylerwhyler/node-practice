//const path = require('path');
const express = require('express');

//const rootDir = require('../helpers/path');

const router = express.Router();

const usersController = require('../controllers/users')

router.get('/add-user', usersController.getAddUser);
router.post('/user', usersController.postAddUser);
//router.delete('/user', usersController.deleteUser)

module.exports = router;