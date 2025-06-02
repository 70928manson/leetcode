/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  let score = [];

  for (const op of operations) {
    if (op === "+") {
      score.push((score.at(-1) ?? 0) + (score.at(-2) ?? 0));
    } else if (op === "D") {
      score.push((score.at(-1) ?? 0) * 2);
    } else if (op === "C") {
      score.pop();
    } else {
      score.push(Number(op));
    }
  }

  return score.reduce((acc, cur) => acc + cur, 0);
};
