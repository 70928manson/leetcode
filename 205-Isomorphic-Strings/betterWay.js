/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();

    for (let i = 0; i < s.length; i++) {
        let c1 = s[i], c2 = t[i];

        if (map1.has(c1) && map1.get(c1) !== c2 || map2.has(c2) && map2.get(c2) !== c1) {
            return false;
        }

        map1.set(c1, c2);
        map2.set(c2, c1);
    };

    return true;
};