// how would we this someProcess() is callback
const fs = require('fs');

function someProcess(name) {
  console.log(name);
}

function someTask(santhosh) {
  const name = 'santhosh';
  santhosh(name);
  console.log('hello');
}

someTask(someProcess);
