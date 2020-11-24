const path = require('path');

const express = require('express');

const rootDir = require('../helpers/path');

const router = express.Router();

router.get("/add-user", (req, res, next) => {
    return res.sendFile(path.join(rootDir, "views", "add-user.html"));
})

router.post('/user', (req, res, next) => {
    console.log(req.body);
    return res.redirect('/');
})

module.exports = router;