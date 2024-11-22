// x °F ≘ (x − 32) ×(9/5) ⁠
const convertToCelsius = function (temp) {
  let celTemp = (temp - 32) * (5 / 9);
  return +(celTemp.toFixed(1));
};

const convertToFahrenheit = function (temp) {
  let farTemp = (temp * (9 / 5) + 32);
  return +(farTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
