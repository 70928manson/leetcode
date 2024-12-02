/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const map = {};
    const len = this.length;

    for (let i = 0; i < len; i++) {
        let res = fn(this[i]);

        if (map[res] === undefined) {
            map[res] = [this[i]]
        } else {
            map[res].push(this[i])
        }
    }

    return map;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */