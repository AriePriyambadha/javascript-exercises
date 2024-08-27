const palindromes = function (string) {
  const newString = string
    .toLowerCase()
    .replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, "");

  console.log(string);
  console.log(newString);

  const strLength = newString.length;
  const range = strLength % 2 === 0 ? strLength / 2 : (strLength - 1) / 2;

  let currLastIndex = strLength - 1;
  for (let i = 0; i < range; i++) {
    if (newString[i] !== newString[currLastIndex]) return false;

    currLastIndex--;
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
