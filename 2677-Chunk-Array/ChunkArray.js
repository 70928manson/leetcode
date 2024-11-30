/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const ans = [];
  // 次數
  let totalChunks = Math.ceil(arr.length / size); // 無條件進位計算 chunks 數量
  let currentIndex = 0; // current index in the arr

  for (let i = 0; i < totalChunks; i++) {
    let endIndex = currentIndex + size; // the end index for the current chunk
    let temp = [];
    for (let j = currentIndex; j < endIndex; j++) {
      if (arr[j] !== undefined) {  //考慮 0, null ...etc
        temp.push(arr[j]);
        currentIndex++;
      }
    }
    ans.push(temp);
  }

  return ans;
};
