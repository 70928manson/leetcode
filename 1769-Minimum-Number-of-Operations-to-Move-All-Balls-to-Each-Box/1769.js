/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const ans = [];

  for (let i = 0; i < boxes.length; i++) {
    let temp = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (i !== j && boxes[j] === "1") {
        temp += Math.abs(i - j);
      }
    }
    ans.push(temp);
  }

  return ans;
};
