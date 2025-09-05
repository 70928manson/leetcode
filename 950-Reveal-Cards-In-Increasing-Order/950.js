/**
    先由小到大 sort
    ex: 
    deck = [17,13,11,2,3,5,7]
           [2, 3, 5, 7, 11, 13, 17]

    1. 反向操作

    原本：
        翻一張 → 拿走
        翻一張 → 放到底部

    反過來：
        從 由小到大的 sort 底部取牌 → 放到 ans 前面
        再從 sort 底部插入一張新的牌

    2. queue
    sort   2 3 5 7 11 13 17
    queue: 0 1 2 3 4  5  6
    result: 

    照著原步驟去操作 queue 
        翻一張 → 拿走    sort 根據 queue 代表的 index 放到 result
        翻一張 → 放到底部 queue


 */

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  const ans = [];

  // 題目希望順序是由小到大, 從這個順序往回推
  deck.sort((a, b) => a - b);
  const queue = deck.map((item, index) => index);

  for (let i = 0; i < deck.length; i++) {
    const index = queue.shift();
    queue.push(queue.shift());

    ans[index] = deck[i];
  }

  return ans;
};
