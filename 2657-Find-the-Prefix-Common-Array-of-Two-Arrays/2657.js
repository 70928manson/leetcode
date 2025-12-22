/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const n = A.length;

  const res = new Array(n);

  // 紀錄各個數字出現次數, 0/1/2, 出現第 2 次代表是 prefix common
  const count = new Array(n + 1).fill(0);
  let common = 0;

  for (let i = 0; i < n; i++) {
    const a = A[i];
    const b = B[i];

    count[a]++;
    if (count[a] === 2) common++;

    count[b]++;
    if (count[b] === 2) common++;

    res[i] = common;
  }

  return res;
};
