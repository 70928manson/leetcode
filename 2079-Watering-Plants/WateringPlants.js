/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  let steps = 0;
  let water = capacity;

  for (let i = 0; i < plants.length; i++) {
    // 如果水不夠澆第 i 棵，就先回河邊裝滿再回來
    if (water < plants[i]) {
      // 從第 i 棵走回河邊再走回第 i 棵：一共 2 * i 步
      steps += 2 * i;
      water = capacity;
    }

    // 從上一個位置走到第 i 棵（包含從河邊走到第 0 棵）
    steps += 1;
    water -= plants[i];
  }

  return steps;
};
