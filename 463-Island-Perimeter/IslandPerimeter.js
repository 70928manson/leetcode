/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let ans = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // 若為1則檢查是否為邊界或上下左右有沒有相鄰島嶼
            if (grid[i][j] === 1) {
                if (grid?.[i-1]?.[j] === undefined || grid?.[i-1]?.[j] !== undefined && grid[i-1][j] !== 1) {
                    ans += 1;
                } 
                if (grid?.[i+1]?.[j] === undefined || grid?.[i+1]?.[j] !== undefined && grid[i+1][j] !== 1) {
                    ans += 1;
                }
                if (grid?.[i]?.[j-1] === undefined || grid?.[i]?.[j-1] !== undefined && grid[i][j-1] !== 1) {
                    ans += 1;
                }
                if (grid?.[i]?.[j+1] === undefined || grid?.[i]?.[j+1] !== undefined && grid[i][j+1] !== 1) {
                    ans += 1;
                }
            }
        }
    }
    return ans;
};