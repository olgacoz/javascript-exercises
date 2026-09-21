const pascal = function (n) {
  if (n === 1) {
    return [1];
  }

  const prevRow = pascal(n - 1);
  const prevRowWithZeros = [0, ...prevRow, 0];
  const currRow = [];

  for (let i = 0; i < n; i++) {
    currRow[i] = prevRowWithZeros[i] + prevRowWithZeros[i + 1];
  }
  return currRow;
};

// Do not edit below this line
module.exports = pascal;
