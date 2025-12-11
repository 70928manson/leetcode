/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  // 不能用 splice 改變原陣列, 會影響時間/空間複雜度
  const stack = [];

  for (const cur of asteroids) {
    let alive = true;

    // 只有當左邊的往右(+), 現在這顆往左(-)才會撞
    while (
      alive &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0 &&
      cur < 0
    ) {
      const top = stack[stack.length - 1];
      const absCur = -cur;

      if (top < absCur) {
        stack.pop();
      } else if (top === absCur) {
        stack.pop();
        alive = false;
      } else {
        alive = false;
      }
    }

    if (alive) stack.push(cur);
  }

  return stack;
};
