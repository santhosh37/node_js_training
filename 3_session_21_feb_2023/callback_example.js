// callback / async & sync example using read & write a file
const fs = require('fs');

const fileData = fs.readFileSync('./inputFile.txt');
console.log(fileData.toString());

console.log('line 8');

const asyncFileData = fs.readFile('inputFile2.txt', function (error, data) {
  if (error) {
    return error;
  }
  console.log(data.toString());
});

console.log('line 17');

const writeAFile = fs.writeFile(
  'writeFile.txt',
  'i am write a node js',
  function (error, data) {
    if (error) {
      return error;
    }
    console.log('writeFileData: ', data);
  }
);
