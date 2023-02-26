const http = require('http');
const port = 8080;
const { getUrl } = require('utils');

http
  .createServer(function (request, response) {
    console.log('server created with port ', port);
    console.log(request.url);
    const url = getUrl(request.url);

    console.log(url);

    if (request.url === '/file1') {
      // do somthing
    } else if (request.url === '/file2') {
      // do somthing
    } else {
      // else throw error
    }
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write('hello santhosh');
    response.end();
  })
  .listen(port);
