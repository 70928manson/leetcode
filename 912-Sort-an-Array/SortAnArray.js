/**
    題目限制 O(nlog(n)) => merge sort
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const len = nums.length;
  if (len <= 1) return nums;

  const mid = Math.floor(len / 2);

  const left = nums.slice(0, mid);
  const right = nums.slice(mid, len);

  return merge(sortArray(left), sortArray(right));
};

const merge = (a, b) => {
  const res = [];

  // pointer
  let i = 0,
    j = 0;

  while (i < a.length && j < b.length) {
    if (a[i] > b[j]) {
      res.push(b[j]);
      j++;
    } else {
      res.push(a[i]);
      i++;
    }
  }

  while (i < a.length) {
    res.push(a[i]);
    i++;
  }

  while (j < b.length) {
    res.push(b[j]);
    j++;
  }

  return res;
};
