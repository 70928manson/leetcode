// 你正在參與一個高度仰賴陣列操作的項目。
// 你的任務是為陣列原型設計一個新的方法，叫做 square()。
// 這個方法應該有效率地迭代陣列中的每個元素，並返回一個全新的陣列，其中每個元素都是原始元素的平方。
// 假設陣列中只包含數字。

// const numbers = [1, 2, 3, 4, 5];
// numbers.square(); // [1, 4, 9, 16, 25]

const numbers = [1, 2, 3, 4, 5];

Array.prototype.square = function() {
    const squaredArray = [];
    for (let i = 0; i < this.length; i++) {
        squaredArray.push(this[i] * this[i]);
    }
    return squaredArray;
};

Array.prototype.squareTwo = function() {
    return this.map((item) => item * item);
}