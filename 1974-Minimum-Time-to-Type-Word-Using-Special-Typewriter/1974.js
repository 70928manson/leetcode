/**
 * 特殊打字機：
 * 1. 只有 26 個字母 (a-z)，排成一個圓環。
 * 2. 初始指標位於 'a'，可以順時針或逆時針移動。
 * 3. 每移動一格花 1 秒，輸入字母也需 1 秒。
 */

/**
 * @param {string} word
 * @return {number} - 完成輸入所需的最短時間
 */
var minTimeToType = function (word) {
    let second = 0;

    // 計算從初始 'a' 移動到 word[0] 所需的時間
    let firstMove = word[0].charCodeAt(0) - 'a'.charCodeAt(0);
    if (firstMove > 13) {
        // 若距離超過 13，則改用逆時針方向 (26 - 距離)
        firstMove = 26 - firstMove;
    } 
    second += (firstMove + 1);

    // 計算每個字母之間的移動時間
    for (let i = 0; i < word.length - 1; i++) {
        let distance = word[i+1].charCodeAt(0) - word[i].charCodeAt(0);

        if (distance < 0) {
            // 若結果為負數，表示從較大字母移動到較小字母，需要補回 26
            distance = distance + 26;
        }

        if (distance > 13) {
            // 若順時針距離超過 13，則改用逆時針方向 (26 - 距離)
            distance = 26 - distance;
        }

        second += (distance + 1);
    };

    return second;
};