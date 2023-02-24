// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
console.log(proccess.env.PWD);

const fs = require('fs');
fs.readFile('./hello.txt', 'utf-8', (error, data) => {
  console.log(data);
});