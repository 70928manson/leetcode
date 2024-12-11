// const numbers = [1, 2, 3, 4, 5];
// const mixedArray = [1, 3.5];
// const emptyArray = [];

// numbers.square(); // [1, 4, 9, 16, 25]
// mixedArray.square(); // [1, 12.25]
// emptyArray.square(); // []

Array.prototype.square = function() {
    return this.map((item) => item * item);
}