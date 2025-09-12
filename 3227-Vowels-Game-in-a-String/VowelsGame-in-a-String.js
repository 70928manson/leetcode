/**
  母音 a e i o u
  Alice 要移除基數個母音 ex: 1 個, 3 個, 5個
  Bob 要移除偶數個母音 ex: 0個, 2 個, 4 個, 6個
  Alice 先
  誰沒東西移除就掰掰

  他們可以自由決定要刪除多少, 只要裡面有包含要刪除的母音

  Alice 贏回傳 true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var doesAliceWin = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  // 先統計有幾個母音在規劃戰術
  let total = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      total++;
    }
  }

  // Bob 只要 s 有母音就輸了 QQ
  return total ? true : false;
};
