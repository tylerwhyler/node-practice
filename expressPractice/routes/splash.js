// const path = require('path');
const express = require('express');

// const rootDir = require('../helpers/path');
const app = require('../app')

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(app.users)
    return res.render('splash', { userList: app.users, title: "Splash page" });
})

module.exports = router;