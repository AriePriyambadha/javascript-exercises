const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arrayOfNums) {
  return arrayOfNums.reduce((total, num) => total + num, 0);
};

const multiply = function (arrayOfNums) {
  return arrayOfNums.reduce((total, num) => total * num, 1);
};

const power = function (num, factorial) {
  return num ** factorial;
};

const factorial = function (num) {
  if (num === 0 || num === 1) return 1;

  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
