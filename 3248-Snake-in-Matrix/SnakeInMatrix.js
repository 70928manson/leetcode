/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function (n, commands) {
  let i = 0;
  let j = 0;

  for (c of commands) {
    if (c === "UP") i--;
    else if (c === "RIGHT") j++;
    else if (c === "DOWN") i++;
    else j--;
  }

  return i * n + j;
};
