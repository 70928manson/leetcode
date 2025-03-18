/**
 * 題目條件：
 * - `rings` 長度為 `2 * n`，表示 `n` 組環與桿的關係
 * - 偶數索引 (index % 2 === 0) 表示環的顏色 ('R', 'G', 'B')
 * - 奇數索引 (index % 2 === 1) 表示桿的位置 (0~9)
 * 
 * 資料結構：
 * - `map` (Map)
 *   - key：桿的位置 (rod)
 *   - value：該桿擁有的環顏色 (Set)
 * 
 * 目標：
 * - 計算擁有紅、綠、藍 (R, G, B) 三種顏色環的桿數量
 */

/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    let result = 0;
    const map = new Map();

    for (let i = 0; i < rings.length; i += 2) {
        let color = rings[i];
        let rod = rings[i+1];

        if (map.has(rod) === false) {
            map.set(rod, new Set());
        };
        map.get(rod).add(color);
    };

    for (let [rod, colorSet] of map) {
        if (colorSet.size === 3) {
            result++;
        };
    };

    return result;
};