/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function (directions) {
  let collisions = 0;

  let i = 0;
  let j = directions.length - 1;

  // 忽略左邊往左開的車
  while (i <= j && directions[i] === "L") i++;

  // 忽略右邊往右開的車
  while (j >= i && directions[j] === "R") j--;

  // 中間這段除了 S 以外全部都會發生碰撞
  for (let k = i; k <= j; k++) {
    if (directions[k] !== "S") collisions++;
  }

  return collisions;
};
