// 實作 fill 函式，此函式接收四個參數：

// 一個陣列
// 要替換的 value
// start 索引
// end 索引
// 該函式會從 start 到 end 索引 (包含 start 但不包含 end) 來把陣列的元素換成 value 。如果未提供 start 索引，則應預設為 0。如果未提供 end 索引，則剩餘元素會被替換為 value。

// fill([1, 2, 3], "*");
// // => ['*', '*', '*']

// fill([1, 2], "*", 2, 3);
// // => [1, 2]

// fill([1, 2, 3, 4, 5], "*", 1, -1);
// // => [1, '*', '*', '*', 5]

// start, end 有可能為負
// start 有可能等於於 arr 長度

function fill(arr, replaceValue, start=0, end=arr.length) {
    if (start < 0) {
        start = arr.length + start;
    };

    if (end < 0) {
        end = arr.length + end;
    };

    if (end > arr.length) {
        end = arr.length;
    };

    for (let i = start; i < end; i++) {
        arr[i] = replaceValue;
    };

    return arr;
}