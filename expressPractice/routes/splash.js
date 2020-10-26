const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    return res.send(`<html><body>
              <h1>Splash page</h1>
              </body></html>`)
})

module.exports = router;