const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin')
const splashRoutes = require('./routes/splash')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/admin", adminRoutes);
app.use(splashRoutes);

app.use((req, res, next) => {
    return res.status(404).sendFile(path.join(__dirname, 'views', '404page.html'));
})

//app.use for any HTTP request type!
//app.post For POST requests only!
//app.get For GET requests only!
//app.delete  --\
//app.patch      for the other http request types
//app.put     --/

app.listen(4000, "127.0.0.1");