/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const map = new Map();

  for (let i = 0; i < heights.length; i++) {
    map.set(heights[i], names[i]);
  }

  return [...heights].sort((a, b) => b - a).map((h) => map.get(h));
};
