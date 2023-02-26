// destruction

const jsonResult = {
  name: 'santhosh',
  techStack: 'JAVA',
  project: 'travelers',
  somekey1: 'somevalue1',
  somekey2: 'somevalue2',
};

const { techStack: program, project: concern, ...otherkeys } = jsonResult;
console.log(program, concern);
console.log(otherkeys);

const dbResult = [
  {
    name: 'santhosh',
    techStack: 'JAVA',
    project: 'travelers',
    somekey1: 'somevalue1',
    somekey2: 'somevalue2',
  },
  {
    name: 'irfan',
    techStack: 'Android',
    project: 'sony',
    somekey1: 'somevalue1',
    somekey2: 'somevalue2',
  },
  {
    name: 'arun',
    techStack: 'ME',
    project: 'first project',
    somekey1: 'somevalue1',
    somekey2: 'somevalue2',
  },
];

// const result3 = dbResult[1];
const [result3, ...otherResults] = dbResult;
console.log('result3: ', result3);
console.log('otherResult: ', otherResults);

// filtering
const filterResult = dbResult.filter((result) => {
  if (result.techStack === 'java') {
    return result;
  }
});
console.log(filterResult);

// OS module
const os = require('os');
console.log(os.platform());
console.log(os.cpus());

// luxon module
const luxon = require('luxon');
