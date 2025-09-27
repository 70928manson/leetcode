/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function (order, friends) {
  const res = [];

  for (const or of order) {
    if (friends.includes(or)) {
      res.push(or);
    }
  }

  return res;
};
