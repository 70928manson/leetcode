/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    // 是 array 或 obj

    if (typeof obj !== 'object' || obj === null) {
        return obj;
    };

    if (Array.isArray(obj)) {
        // 處理多層陣列/物件狀況
        const processedArray = obj.map((item) => compactObject(item));

        return processedArray.filter((item) => Boolean(item));
    };

    const result = {};
    for (const key in obj) {
        // 處理多層陣列/物件狀況
        const value = compactObject(obj[key]);
        
        if (value) {
            result[key] = value;
        };
    };

    return result;
};