const path = require('path');
const express = require('express');
// const rootDir = require('../helpers/path');

const router = express.Router();

const app = require('../app')

router.get("/add-user", (req, res, next) => {
    return res.render('add-user', { title: 'Add-user' })
})

router.post('/user', (req, res, next) => {
    app.users.push(req.body)
    return res.redirect('/');
})

module.exports = router;