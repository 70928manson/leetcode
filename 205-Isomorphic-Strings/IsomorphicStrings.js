/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        let get = map.get(s[i]);

        if (!get) {
            map.set(s[i], t[i]);
        } else if (get !== t[i]) {
            return false;
        };
    };

    const map2 = new Map();
    for (let i = 0; i < t.length; i++) {
        let get = map2.get(t[i]);

        if (!get) {
            map2.set(t[i], s[i]);
        } else if (get !== s[i]) {
            return false;
        };
    };

    return true;
};