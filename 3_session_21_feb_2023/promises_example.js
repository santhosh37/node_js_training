// promises

const age = 30;

const result = new Promise((resolve, reject) => {
  if (age <= 25) {
    resolve('eligible for exam');
  } else {
    reject('not eligible');
  }
});

result
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
