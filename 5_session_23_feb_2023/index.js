const http = require('http');
const port = 8080;

http
  .createServer(function (request, response) {
    console.log('server created with port ', port);
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write('hello santhosh');
    response.end();
  })
  .listen(port);
