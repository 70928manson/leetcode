let a = [1, null, 2, 3];
let b = [1, null, 2, null, 3];
let errIndex = [1, 2, 3];

// a,b 去掉 null 合併變成 newArr = [1, 2, 3, 1, 2, 3];
// errIndex [1, 2, 3] 代表 newArr 陣列 index 1, 2 為錯誤訊息的位置
// newArr 變成 [1, 'err', 'err', 1, 2, 3]
// 現在要依據 newArr, 把 err 放到原本 a, b 陣列, 並把所有其他值換成 null
// a -> [null, null, 'err', null, 'err],  b-> ['err', null, null, null, null]



//這是一道關於陣列操作的白板題，包含了清除 null、合併、替換錯誤訊息 (err)，以及根據合併後的結果回推原陣列的改造

// 問題詳細
// 輸入資料：
// a = [1, null, 2, 3]
// b = [1, null, 2, null, 3]
// errIndex = [1, 2, 3]

// 目標步驟：
// 去掉 null 後合併 a 和 b，得到 newArr = [1, 2, 3, 1, 2, 3]。
// 根據 errIndex，將 newArr 中指定的索引位置替換為 'err'，結果是 newArr = [1, 'err', 'err', 1, 2, 3]。
// 根據修改後的 newArr，將 'err' 放回原本的陣列 a 和 b 中，其他非錯誤的值替換為 null。
// a -> [null, null, 'err', null, 'err']
// b -> ['err', null, null, null, null]

// function processArrays(a, b, errIndex) {
//     // 去掉 null 並合併
//     const newArr = [...a.filter(v => v !== null), ...b.filter(v => v !== null)];

//     // 替換錯誤索引為 'err'
//     errIndex.forEach(index => {
//         newArr[index] = 'err';
//     });

//     // 根據 newArr 回填 a 和 b
//     let aPointer = 0;
//     let bPointer = 0;

//     const newA = Array(a.length).fill(null);
//     const newB = Array(b.length).fill(null);

//     for (let i = 0; i < newArr.length; i++) {
//         if (newArr[i] === 'err') {
//             // 將 'err' 填回第一個對應的原陣列
//             if (aPointer < a.length && a[aPointer] !== null) {
//                 newA[aPointer] = 'err';
//                 aPointer++;
//             } else {
//                 newB[bPointer] = 'err';
//                 bPointer++;
//             }
//         } else {
//             // 過濾正常值，移動指標
//             if (aPointer < a.length && a[aPointer] !== null) {
//                 aPointer++;
//             } else if (bPointer < b.length && b[bPointer] !== null) {
//                 bPointer++;
//             }
//         }
//     }

//     return [newA, newB];
// }

// // 測試
// let a = [1, null, 2, 3];
// let b = [1, null, 2, null, 3];
// let errIndex = [1, 2, 3];

// const [newA, newB] = processArrays(a, b, errIndex);

// console.log('a ->', newA); // [null, null, 'err', null, 'err']
// console.log('b ->', newB); // ['err', null, null, null, null]


// 去掉 null 並合併：使用 filter 過濾掉 null，再用解構語法合併。
// 替換錯誤索引：遍歷 errIndex，將對應位置替換為 'err'。
// 回填原陣列：
// 使用雙指標分別追蹤 a 和 b，根據非 null 的位置依次處理。
// 將 'err' 依序回填到第一個出現的有效索引位置。

// see also: 26, 283, 88