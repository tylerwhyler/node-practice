const path = require('path');

const express = require('express');

const router = express.Router();

router.use('/splash', (req, res, next) => {
    return res.sendFile(path.join(__dirname, "../", "views", "splash.html"));
})

module.exports = router;