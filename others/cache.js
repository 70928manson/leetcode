// 在寫程式時，如果不想重複執行複雜的計算，通常會使用 緩存（cache） 來解決這個問題。
// 簡單來說，緩存就是先把計算過的結果存起來，這樣當遇到相同的輸入時，就不用再重新計算，而是直接取用先前的結果，這樣可以大幅提升效能並節省運算時間。

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