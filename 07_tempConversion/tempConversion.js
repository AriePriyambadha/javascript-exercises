const convertToCelsius = function (fahrenheit) {
  /*
    Fahrenheit toe Celsius formula is:
    (Fahrenheit - 32) * 5/9
  */
  return Number((((fahrenheit - 32) * 5) / 9).toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  /*
    Celsius to Fahrenheit formula is:
    (Celsius * 9/5) + 32
  */

  return Number(((celsius * 9) / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
