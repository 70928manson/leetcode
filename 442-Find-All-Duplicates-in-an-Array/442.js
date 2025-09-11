/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  // 跑兩次迴圈
  // 第一次存到 map
  // 第二次找出現 2 次的推到 set (注意不重複)

  const set = new Set();

  const map = new Map();

  for (const num of nums) {
    const get = map.get(num);
    if (get) {
      map.set(num, get + 1);
    } else {
      map.set(num, 1);
    }
  }

  for (const num of nums) {
    if (map.get(num) === 2 && set.has(num) === false) {
      set.add(num);
    }
  }

  return [...set];
};
