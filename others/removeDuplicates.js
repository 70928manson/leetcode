// 陣列去除重複 remove duplicates，是 JavaScript 程式面試中，很常會考的入門考題。

// 陣列去除重複在做的事很簡單，我們透過例子來說明：

// removeDuplicate([1, 2, 3, 2]); // [1, 2, 3]
// removeDuplicate([5, 5, 6, 6]); // [5, 6]

function removeDuplicate(arr) {
    // 查找表
    const seen = new Set();
    
    const ans = [];

    for (const item of arr) {
        if (seen.has(item) === false) {
            seen.add(item);
            ans.push(item);
        };
    };

    return ans;
}