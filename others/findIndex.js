// 手寫 findIndex 的函式，它會接受三個參數：

// array：要搜索的陣列
// predicate：測試函式，用於判斷元素是否符合所需條件
// fromIndex：搜索的起始索引，如果未指定，則默認為 0
// findIndex 函式，會返回陣列中第一個滿足 predicate 函式的元素的索引。如果找不到符合條件的元素，則返回 -1。

// findIndex(array, predicate, [(fromIndex = 0)]);

// findIndex([1, 13, 7, 54], (num: number) => num > 10)) // 1
// findIndex([1, 13, 7, 54], (num: number) => num > 200)) // -1

// fromIndex 有可能為負的!!!

function findIndex(arr, predicate, fromIndex = 0) {
    const startIndex = fromIndex < 0 ? fromIndex + arr.length : fromIndex;

    for (let i = startIndex; i < arr.length; i++) {
        if (predicate(arr[i])) {
            return i;
        };
    };

    return -1;
}