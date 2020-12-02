const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const splashRoutes = require('./routes/splash');
const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// app.engine('handlebars', expressHbs({ 
//     layoutsDir: path.join(__dirname, 'views/layouts'), 
//     defaultLayout: 'main-layout',
//     extname: 'handlebars' //extname is 'handlebars' by default
// }));
// ^registers a new, not built-in templating engine to express

app.set('view engine', 'ejs'); 
// ^tells express what templating engine to use; example: app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views')); //views is views by default

const port = 4000;

app.use("/admin", adminRoutes);
app.use(splashRoutes);

app.use(errorController.errorPage);

//app.use for any HTTP request type!
//app.post For POST requests only!
//app.get For GET requests only!
//app.delete  --\
//app.patch      for the other http request types
//app.put     --/

app.listen(port, "127.0.0.1", () => {
    console.log(`Server running on port: ${port}`)
});