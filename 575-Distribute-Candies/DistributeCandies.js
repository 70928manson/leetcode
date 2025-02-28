/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const max = candyType.length / 2;
    
    let count = 0;
    const set = new Set();
    for (const type of candyType) {
        if (set.has(type) === false) {
            set.add(type);
            count++;
        };
    };
    return count > max ? max : count;
};