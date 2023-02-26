let a = function (x, y) {
  return x * y;
};
const result = a(5, 5);
console.log(result);

let b = (x, y) => x * y;
const result2 = b(2, 3);
console.log(result2);

const c = (x, y) => {
  let add = x + y;
  return add * 3.14;
};
const result3 = c(6, 7);
console.log(result3);
