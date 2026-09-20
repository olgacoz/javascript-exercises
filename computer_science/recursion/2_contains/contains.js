const contains = function (obj, target) {
  const values = Object.values(obj);

  if (values.includes(target)) {
    return true;
  }

  nestedObjs = values.filter((value) => {
    return typeof value === "object" && value !== null;
  });

  return nestedObjs.some((nestedObj) => contains(nestedObj, target));
};

// Do not edit below this line
module.exports = contains;
