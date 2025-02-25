/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const map = new Map();
    const rank = [...score].sort((a, b) => b - a);

    rank.forEach((item, i) => {
        map.set(item, i === 0 ? "Gold Medal" : 
            i === 1 ? "Silver Medal" : 
            i === 2 ? "Bronze Medal" : `${i + 1}`);
    });

    return score.map((item) => map.get(item));
};