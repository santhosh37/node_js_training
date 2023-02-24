// asynchronous/synchronous functions

const fs = require('fs');

console.log('something');

fs.readFile('./inputFile.txt', 'utf-8', (error, data) => {
  if (error) {
    console.log('error: ', error);
  }
  console.log('data: ', data);
});

function printDate(date) {
  console.log('date: ', date);
}

printDate('20-02-2023');

// const http=require('http');

// http.createServer(function(request,response){
//   response.write('hello world'); // write a response to the client
//   response.end(); // end the response
// }).listen(8080);
