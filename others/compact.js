// Lodash 的 compact 是開發中經常被用的效用函式。 
// compact 能將輸入的陣列中的 false、null、0、空字串、undefined 和 NaN 都去除，並輸出一個新的陣列。

// compact([0, 1, false, 2, "", 3, "hello"]); // [1, 2, 3, 'hello']
// compact([null, undefined, NaN, " "]); // [' ']
// compact([{ name: "Alice" }, null, { age: 30 }, undefined]); // [{ name: 'Alice' }, { age: 30 }]

function compact(arr) {
    const ans = [];

    for (const item of arr) {
        if (arr) {
            ans.push(item);
        }
    }
    return ans;
}