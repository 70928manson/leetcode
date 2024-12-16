// 請實作一個 dropWhile 函式。去除array中從起點開始到 predicate 回傳 false 部分
// 此函式接受兩個參數，第一個是參數是一個陣列，它可以是任何類型的陣列；
// 第二個是一個 predicate 函式，會接受陣列中的元素，如果返回為真，則表示該元素應該被丟棄，直到返回的不為真。
// predicate 會傳入三個參數 (value, index, array)

// dropWhile 會返回一個新的陣列，且不應改動到原始陣列。其中包含原始陣列的切片，不包括從頭開始被丟棄的元素。

function dropWhile(arr, predicateFn) {
    let droppedCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (predicateFn(item, i, arr) === false) {
            break;
        };
        droppedCount++;
    };

    return arr.slice(droppedCount);
}