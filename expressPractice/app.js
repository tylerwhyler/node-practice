const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars');

const app = express();

const adminRoutes = require('./routes/admin')
const splashRoutes = require('./routes/splash')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', expressHbs()); //registers a new, not built-in templating engine to express

app.set('view engine', 'handlebars'); //tells express what templating engine to use; example: app.set('view engine', 'jse')
app.set('views', path.join(__dirname, 'views')); //views is views by default

const port = 4000;
const users = [];

app.use("/admin", adminRoutes);
app.use(splashRoutes);

app.use((req, res, next) => {
    return res.status(404).render('404', { title: 'Error Page' })
})

//app.use for any HTTP request type!
//app.post For POST requests only!
//app.get For GET requests only!
//app.delete  --\
//app.patch      for the other http request types
//app.put     --/

app.listen(port, "127.0.0.1", () => {
    console.log(`Server running on port: ${port}`)
});

exports.users = users