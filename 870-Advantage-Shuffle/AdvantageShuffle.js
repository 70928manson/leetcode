/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  const res = new Array(nums1.length);

  const sorted = nums1.toSorted((a, b) => b - a); // desc

  const pairs = nums2.map((val, idx) => [val, idx]).sort((x, y) => y[0] - x[0]); // nums2 desc

  let i = 0;
  let j = sorted.length - 1;

  for (const [val, idx] of pairs) {
    // win with max
    if (sorted[i] > val) {
      res[idx] = sorted[i];
      i++;
    }
    // sacrifice min
    else {
      res[idx] = sorted[j];
      j--;
    }
  }

  return res;
};
