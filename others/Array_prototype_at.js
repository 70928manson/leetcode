// 實作 Array.prototype.at，該方法會接受一個整數作為輸入，並從陣列中檢索相應元素。
// 除了正整數外，也要能夠處理負整數，負整數會從陣列末尾計算。以下為使用範例

// const arr = ["Hello", "World"];
// arr.at(0); // Hello
// arr.at(1); // World
// arr.at(2); // undefined

// arr.at(-1); // World
// arr.at(-2); // Hello
// arr.at(-3); // undefined

Array.prototype.at = function(index) {
    const findIndex = index >= 0 ? index : index + this.length;

    return this[findIndex];
}