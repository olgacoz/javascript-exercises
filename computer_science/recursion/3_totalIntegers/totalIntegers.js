const totalIntegers = function (obj) {
  if (typeof obj !== "object" && obj !== null) {
    return undefined;
  }

  let intCount = 0;
  const values = Object.values(obj);

  for (const value of values) {
    if (Number.isInteger(value)) {
      intCount++;
    } else if (typeof value === "object" && value !== null) {
      intCount += totalIntegers(value);
    }
  }

  return intCount;
};
// Do not edit below this line
module.exports = totalIntegers;
