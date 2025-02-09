const convertToCelsius = function(y) {
  y = (y - 32) * 5/9
  if (Number.isInteger(y)){
    return y
  } else {
    return Number(y.toFixed(1))
  }
};

const convertToFahrenheit = function(x) {
  x = (x*(9/5)) + 32
  if (Number.isInteger(x)){
    return x
  } else {
    return Number(x.toFixed(1))
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
