/**
   題目給定整數 num 和 t，允許進行最多 t 次操作
   每次操作可以讓 x 和 num 加 1 或減 1 
   目標是讓 x 和 num 相等
   由於題目求最大 x，所以可以導出 x 會大於 num
   
   操作的過程中，x 和 num 始終保持相同的差距
   所以如果一開始 x 比 num 大 2t，就能剛好在 t 次操作內變成相等。
 
   設 x = num + 2 * t
   return x
*/

/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
var theMaximumAchievableX = function (num, t) {
  return num + 2 * t;
};
