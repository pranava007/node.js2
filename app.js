const http = require("http");

const { buffer } = require("stream/consumers");

const routes = require('./routes')

console.log(routes.someText);
console.log('muthu');

const server = http.createServer(routes.handler);
server.listen(3030);
