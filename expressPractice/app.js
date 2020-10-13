const express = require('express');

app = express();

// let middlewareCount = 0;

// app.use((req, res, next) => {
//     console.log('express is way easier wow');
//     middlewareCount++;
//     next();
// })

// app.use((req, res, next) => {
//     console.log('express is way easier wow');
//     middlewareCount++;
//     next();
// })

// app.use((req, res, next) => {
//     res.send(`<h1>total number of middlewares used: ${middlewareCount}</h1>`);
//     middlewareCount = 0;
// })

app.use("/users", (req, res, next) => {
    return res.send('<p>List of all registered users: </p>')
})

app.use("/", (req, res, next) => {
    return res.send('<h1>Splash page, Welcome!</h1>')
})

app.listen(4000);