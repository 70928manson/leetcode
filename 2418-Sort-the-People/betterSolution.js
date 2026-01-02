/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  // Pairs 排序
  return names
    .map((name, i) => [heights[i], name])
    .sort((a, b) => b[0] - a[0])
    .map(([h, n]) => n);
};
