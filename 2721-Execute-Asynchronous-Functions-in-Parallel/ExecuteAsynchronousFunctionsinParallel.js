/**
 *  The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions
 */
/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    const ans = [];
    let count = 0;  // 紀錄成功得到 resolve 的 promise 數量 

    return new Promise((resolve, reject) => {
        functions.forEach((promise, index) => {
            promise().then((res) => {
                // resolve 結果順序要跟 傳進來的參數順序一致
                // 所以不能用 ans.push(res)
                ans[index] = res;
                count++;

                // 不能用 ans.length, 有可能出現最後一個好了但前面還沒 resolve 值為 null 的狀況
                if (count === functions.length) {
                    resolve(ans);
                }
            }).catch((err) => {
                reject("Error");
            })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */