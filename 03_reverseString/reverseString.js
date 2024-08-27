const reverseString = function (string) {
  // const result = [];
  // const stringLength = string.length - 1;
  // for (let i = stringLength; i >= 0; i--) {
  //   result.push(string[i]);
  // }
  // return result.join("");

  return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
