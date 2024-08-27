const removeFromArray = function (array, ...params) {
  for (let i = 0; i < params.length; i++) {
    for (let j = array.length - 1; j >= 0; j--) {
      if (params[i] === array[j]) array.splice(j, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
