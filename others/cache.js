// 在寫程式時，如果不想做重複的複雜運算，我們經常會透過緩存 (cache) 來實現。
// 緩存的意思是先把過去已經運算過的輸出存起來，如果之後有同樣的輸入，未來就不用再運算一次，而是直接從緩存拿之前算過的，這能有效省去時間。

function cached(fn) {
    const cache = {};

    return (...args) => {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        } else {
            const val = fn(...args);
            cache[key] = val;
            return val;
        };
    };
};