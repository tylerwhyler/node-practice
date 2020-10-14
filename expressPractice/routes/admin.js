const express = require('express')

const router = express.Router();

router.get("/add-user", (req, res, next) => {
    return res.send(`<html><body>
                     <form action="users" method="POST">
                     <input type="text" name="user">
                     <button type="submit">Add user</button></input></form>
                     </body></html>`)
})

router.post('/users', (req, res, next) => {
    console.log(req.body);
    // res.redirect('/');
    return res.send(`<h1>users: ${req.body.user}</h1>`)
})

module.exports = router;