const add = function (num1, num2) {
  return num1 + num2;

};

const subtract = function (num1, num2) {
  return num1 - num2;
};

/**
 * 
 * @param {number} arr 
 */
const sum = function (arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
};

/**
 * 
 * @param {number} arr 
 */
const multiply = function (arr) {
  let output = 1;
  for (let item of arr) {
    output *= item;
  }
  return output;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  let output = 1;
  if (num == 0) return 1;

  for (let i = num; i > 0; i--) {
    output *= i;
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
