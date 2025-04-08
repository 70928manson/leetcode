/**
 * 先判斷 num 是否為負數，記錄下來
 * 將 num 轉為正數來處理
 * 不斷對 7 取餘並除以 7，將餘數加到結果字串前方
 * 最後如果原本是負數，加上負號
 */

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  if (num === 0) return "0";

  const isNegative = num < 0;
  num = Math.abs(num);
  let result = "";

  while (num > 0) {
    const remain = num % 7;
    result = remain + result;  // // 注意不是 result += remain, 需將新位數加在前面，確保從高位到低位
    num = Math.floor(num / 7);
  }

  return isNegative ? "-" + result : result;
};
