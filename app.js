const http = require('http');
const routes = require('./routes');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    routes.routeHandler(req, res);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});