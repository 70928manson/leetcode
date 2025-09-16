/**
  words 陣列長度最小 1, 最大 100
  words[i] 都是小寫, 長度最小 1, 最大 100

  思路:
  1. 先把第一個 word 出現字母存進 hash 物件作為基準, 物件紀錄出現字母與次數
  2. 每次比對其他 word[i] 更新 hash 物件
  3. 遍歷 hash 物件, 依據出現字母和次數推到 res
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  const res = [];

  let hash = {};

  // 初始化
  for (let i = 0; i < words[0].length; i++) {
    if (hash[words[0][i]] !== undefined) {
      hash[words[0][i]] += 1;
    } else {
      hash[words[0][i]] = 1;
    }
  }

  // 更新比對
  for (let j = 1; j < words.length; j++) {
    let tempHash = {};
    for (let z = 0; z < words[j].length; z++) {
      let char = words[j][z];
      if (hash[char] && hash[char] > 0) {
        hash[char] -= 1;

        if (tempHash[char]) {
          tempHash[char] += 1;
        } else {
          tempHash[char] = 1;
        }
      }
    }
    hash = tempHash;
  }

  // 組答案
  for (const key in hash) {
    for (let q = 0; q < hash[key]; q++) {
      res.push(key);
    }
  }

  return res;
};
