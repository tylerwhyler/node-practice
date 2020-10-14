const express = require('express');

const splashRoute = express.Router();

splashRoute.get('/', (req, res, next) => {
    res.send(`<html><body>
              <h1>Splash page</h1>
              </body></html>`)
})

module.exports = splashRoute;