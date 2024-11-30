/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = [];
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp.push(arr[i]);

        if (temp.length === size || i === arr.length - 1) {
            result.push(temp);
            temp = [];
        }
    }
    return result;
};
