// dropRightWhile 會從陣列的末端開始，移除符合指定條件的元素，直到遇到不符合條件的元素為止，並回傳剩餘的元素所組成的新陣列。同時確保原始陣列保持不變

// dropRightWhile(
//     ["hello", "world", "today", "isGood"],
//     (value) => value.length > 5
//   ); // =>  ['hello', 'world', 'today']
// 
// dropRightWhile(
//     [
//       { name: "Alice", age: 25 },
//       { name: "Charlie", age: 20 },
//       { name: "Bob", age: 30 },
//     ],
//     (obj) => obj.age > 25
//   ); // => [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]
// 
// dropRightWhile([10, 20, 30, 40, 50, 10], (value) => value !== 10); // => [10, 20, 30, 40, 50, 10]
// dropRightWhile([1], (value) => value > 0); // => []


function dropRightWhile (arr, predicate) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (predicate(arr[i], i, arr) === false) {
            break;
        }
        return arr.slice(0, i+1);
    }

    return arr;
}