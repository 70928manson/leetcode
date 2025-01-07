// 題目： 這是一道關於陣列操作的白板題，包含了清除 null、合併、替換錯誤訊息 (err)，以及根據合併後的結果回推至原陣列的改造
//       完成一個函式 handleErrArrayData(a, b, errIndex)，其輸入為陣列 a、b 和 errIndex，輸出為一個包含回推後結果的陣列 [newA, newB]，對應以下範例：

// 輸入：
// a = [1, null, 2, 3]
// b = [1, null, 2, null, 3]
// errIndex = [1, 2, 3], 表示合併後的新陣列中，索引 1、2、3 為錯誤訊息的位置

// 輸出：
// [
//   [null, null, 'err', null, 'err'], // newA
//   ['err', null, null, null, null]  // newB
// ]

// 目標步驟：
// 1. 移除 null 值並合併陣列 a 和 b：
//    - 去掉 null 後，a 和 b 被合併為： mergeArr = [1, 2, 3, 1, 2, 3]
// 2. 將指定的索引位置替換為 'err'
//    - 根據 errIndex，將 mergeArr 中的對應位置替換為 'err'，得到： mergeArr = [1, 'err', 'err', 'err', 2, 3]
// 3. 回推原本的陣列 a 和 b
//    - 根據處理後的 mergeArr，將 'err' 放回原本的 a 和 b 的位置。
//    - 將非錯誤的值替換為 null，最終結果
//        * a -> [null, null, 'err', null, 'err']
//        * b -> ['err', null, null, null, null]


let a = [1, null, 2, 3];
let b = [1, null, 2, null, 3];
let errIndex = [1, 2, 3];

function handleErrArrayData(a, b, errIndex) {
    // 去掉 null 並合併
    const filteredA = a.filter((item) => item !== null);
    const filteredB = b.filter((item) => item !== null);
    const mergeArr = [...filteredA, ...filteredB];

    // 替換錯誤索引為 'err'
    errIndex.forEach(errIndex => {
        // 錯誤邊界檢查, 避免出現 -999 or 3000000
        if (errIndex >= 0 && errIndex < mergeArr.length) {
            mergeArr[errIndex] = 'err';
        }
    });
    // ！！ 注意 mergeArr 長度 不會等於原本未去掉null a + b 長度

    // 切分 mergeArr 為 a 和 b 的部分
    const mergeA = mergeArr.slice(0, filteredA.length);
    const mergeB = mergeArr.slice(filteredA.length);

    // 回推原陣列
    const newA = a.map((item) => {
        if (item === null) {
            return null;
        } 
        // 合法值替換為 null，錯誤值保留 'err'
        return mergeA.includes(item) ? null : 'err';
    });

    const newB = b.map((item) => {
        if (item === null) {
            return null;
        }
        // 合法值替換為 null，錯誤值保留 'err'
        return mergeB.includes(item) ? null : 'err';
    });

    return [newA, newB];
};

// see also: 26, 283, 88