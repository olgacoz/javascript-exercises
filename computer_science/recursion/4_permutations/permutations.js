const permutations = function (arr) {
  if (arr.length === 1 || arr.length === 0) {
    return [arr];
  }

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const ithItem = [arr[i]];
    let rest;

    if (i === 0) {
      rest = permutations(arr.slice(1));
    } else if (i === arr.length - 1) {
      rest = permutations(arr.slice(0, -1));
    } else {
      const beforeIth = arr.slice(0, i);
      const afterIth = arr.slice(i + 1);
      rest = permutations(beforeIth.concat(afterIth));
    }

    for (let j = 0; j < rest.length; j++) {
      result.push(ithItem.concat(rest[j]));
    }
  }
  return result;
};

// Do not edit below this line
module.exports = permutations;
