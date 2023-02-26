const http = require("http");
const port = 8080;
const { getUrl } = require("./utils");

http
  .createServer(function (request, response) {
    console.log("server created with port ", port);
    console.log(request.url);
    const url = getUrl(request.url);

    console.log(url);

    // switch approch
    switch (url) {
      case "file1":
        //do something
        break;

      case "file2":
        //do something
        break;

      default:
      // do something else
    }

    // if approch
    if (url === "/file1") {
      // do somthing
    } else if (url === "/file2") {
      // do somthing
    } else {
      // else throw error
    }
    response.writeHead(200, { "content-type": "text/html" });
    response.write("hello santhosh");
    response.end();
  })
  .listen(port);
