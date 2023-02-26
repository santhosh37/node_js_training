// multiple promises/arrow function

let a = 1;

const promises1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a == 1) {
        console.log('promises 1 resolved');
        resolve(a + a);
      } else {
        console.log('promises 1 rejected');
        reject('error occured');
      }
    }, 5000);
  });
};

let b = 2;

const promises2 = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (b == 1) {
        console.log('promises 2 resolved');
        resolve(b + b);
      } else {
        console.log('promises 2 rejected');
        reject('error occured');
      }
    }, 1000);
  });
};

Promise.all([promises1(), promises2()])
  .then(() => {
    console.log('success');
  })
  .catch(() => {
    console.log('failed');
  });
