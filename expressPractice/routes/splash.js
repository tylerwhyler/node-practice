// const path = require('path');
const express = require('express');

// const rootDir = require('../helpers/path');
const app = require('../app')

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(app.users)
    return res.render('splash', { 
        userList: app.users, 
        title: "Splash page",
        path: '/',
        hasUsers: app.users.length > 0 ? true : false,
        activeSplash: true,
        usersCSS: true,
        //layout: false -> special keyword to not use the layout
    });
})

module.exports = router;