const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }

  return death - birth;
};

// const findTheOldest = function (people) {
//   let result = 0;
//   let indexPerson = 0;
//   people.forEach((item, index) => {
//     let age = item.yearOfDeath - item.yearOfBirth;
//     if (result < age) {
//       result = age;
//       indexPerson = index;
//     }
//   });

//   return people[indexPerson];
// };

const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge < currentAge ? currentPerson : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
