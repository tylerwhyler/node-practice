const http = require('http');

const routes = require('./routes');

const port = 4000;

const server = http.createServer(routes.requestHandler);

routes.printSomeText(port);

server.listen(port, '127.0.0.1');
