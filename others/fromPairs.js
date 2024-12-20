// 實作一個 fromPairs 函式。 fromPairs 會接受一個參數 pairs，這個參數是一個包含多個兩元素子陣列的陣列。
// 每個子陣列代表一個鍵值對 (key-value pair)，其中第一個元素是鍵(key)，第二個元素是值(value)。

// fromPairs 最後會返回一個新的物件，每個來自 pairs 陣列的鍵值對(key-value pair)，都會是這個新物件的鍵值對(key-value pair)。

// const pairs = [
//     ["explain", "this"],
//     ["help", "you"],
//     ["keep", "growing"],
//   ];
  
//   fromPairs(pairs);
//   // => { explain: 'this', help: 'you', keep: 'growing' }

function fromPairs(arr) {
    const ans = {};

    for (const [key, value] of arr) {
        ans[key] = value;
    }

    return ans;
}