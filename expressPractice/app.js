const express = require('express');
const bodyParser = require('body-parser')

app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use("/add-user", (req, res, next) => {
    return res.send(`<html><body>
                     <form action="users" method="POST">
                     <input type="text" name="user">
                     <button type="submit">Add user</button></input></form>
                     </body></html>`)
})
//app.use for any HTTP request type!
//app.post For POST requests only!
//app.get For GET requests only!
//app.delete
//app.patch
//app.put for the other http request types
app.get('/users', (req, res, next) => {
    console.log(req.body);
    // res.redirect('/');
    return res.send(`<h1>users: ${req.body.user}</h1>`)
})

app.listen(4000);