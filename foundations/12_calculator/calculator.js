const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numArray) {
	return numArray.reduce((a, b) => a + b, 0);
};

const multiply = function(numArray) {
  return numArray.reduce((a, b) => a * b, 1);
};

const power = function(base, exp) {
  let product = 1;
  
	for (let i = 0; i < exp; i++) {
    product *= base;
  }
  return product;
};

const factorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
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
