// 節流 (throttle) 指的是，在一段時間（t）內只會執行一次觸發事件的回調 (callback) 函式，若在這之中又有新事件觸發，則不執行此回調函式。

// 節流函式 throttle，此函式接收兩個參數，第一個參數是一個回調函式 fn，第二個參數是延遲時間 delay。

function throttle(fn, delay) {
    let timer;

    return (...args) => {
        if (timer) return;

        timer = setTimeout(() => {
            timer = null;
        }, delay);

        fn(...args);
    };
};