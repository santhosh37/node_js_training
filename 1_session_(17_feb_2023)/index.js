// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const fs = require('fs');
fs.readFile('./hello.txt', 'utf-8', (error, data) => {
  console.log(data);
});
