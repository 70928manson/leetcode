/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    const map = {};

    arr1.forEach((item) => {
        map[item.id] = item;
    });

    arr2.forEach((item) => {
        if (map[item.id] === undefined) {
            map[item.id] = item;
        } else {
            map[item.id] = {
                ...map[item.id],
                ...item
            };
        };
    });

    return Object.values(map);
};