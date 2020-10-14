const express = require('express');
const bodyParser = require('body-parser')

app = express();

const adminRoutes = require('./routes/admin')
const splashRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: true}));

app.use(adminRoutes);
app.use(splashRoutes);

//app.use for any HTTP request type!
//app.post For POST requests only!
//app.get For GET requests only!
//app.delete
//app.patch
//app.put for the other http request types

app.listen(4000);