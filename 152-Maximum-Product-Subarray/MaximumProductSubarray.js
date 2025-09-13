/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // coner case: 只有一個 num
  if (nums.length === 1) return nums[0];

  // 其他：都是正數, 都是負數, 偶數正奇數負, 奇數正偶數負 ...etc
  //      從右到左, 從左到右

  // 遇到負數怎麼辦
  // 先知道有幾個負數
  let negativeCount = 0;
  for (const num of nums) {
    if (num < 0) {
      negativeCount++;
    }
  }

  return Math.max(
    findMaxProduct(negativeCount, nums),
    findMaxProduct(negativeCount, nums.toReversed())
  );
};

const findMaxProduct = (negativeCount, array) => {
  let maxProduct = -Infinity;

  let temp = 1;
  for (const num of array) {
    // 遇到 0 跳過重置
    if (num === 0) {
      maxProduct = Math.max(num, maxProduct);
      temp = 1;
      continue;
    }

    // 核心思想: 確保遇到負數之後還有多的負數 才有機會轉正
    // 當遇到最後一個負數, 且 temp 是正數要被這個東西轉成負數, 永無翻身之地, 那直接跳過重置
    if (temp > 0 && num < 0 && negativeCount === 1) {
      temp = 1;
      continue;
    }

    temp *= num;
    maxProduct = Math.max(temp, maxProduct);

    if (num < 0) {
      negativeCount--;
    }
  }

  return maxProduct;
};
