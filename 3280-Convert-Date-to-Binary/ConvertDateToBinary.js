/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
  let ans = "";

  const dateArr = date.split("-");

  for (let i = 0; i < dateArr.length; i++) {
    ans += decimalToBinary(Number(dateArr[i]));

    if (i !== dateArr.length - 1) {
      ans += "-";
    }
  }

  return ans;
};

const decimalToBinary = (num) => {
  let result = "";

  while (num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  }

  return result;
};
