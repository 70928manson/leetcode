/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const res = [];
  const map = new Map();

  // {
  //   1: [5],
  //   3: [0, 1, 2, 3, 4, 6]
  // }

  for (let i = 0; i < groupSizes.length; i++) {
    const size = groupSizes[i];

    // map 初始化
    if (!map.has(size)) map.set(size, []);

    const arr = map.get(size);
    arr.push(i);

    if (arr.length === size) {
      res.push(arr);
      map.delete(size);
    }
  }

  return res;
};
