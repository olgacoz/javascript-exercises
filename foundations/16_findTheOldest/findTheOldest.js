const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  let person1Age;
  let person2Age;

  const oldestPerson = people.reduce((person1, person2) => {
    person1Age = person1.yearOfDeath === undefined
      ? currentYear - person1.yearOfBirth
      : person1.yearOfDeath - person1.yearOfBirth;

    person2Age = person2.yearOfDeath === undefined
      ? currentYear - person2.yearOfBirth
      : person2.yearOfDeath - person2.yearOfBirth;

    if (person1Age >= person2Age) {
      return person1;
    }
    return person2;
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
