/**
 * 將 n 正整數 轉成二進制並看他有幾個1
 */

/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let binaryString = n.toString(2);
    let ans = 0;

    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === "1") {
            ans++;
        }
    }

    return ans
};

/**
 * follow up: 如果不能用 toString, 規定要手寫轉成二進制
 * 不斷地將數字除以 2，並記錄每次除以 2 的餘數來
 */

// function decimalToBinary(decimalNumber) {
//     let binaryArray = [];
//     let number = decimalNumber;

//     while (number > 0) {
//         binaryArray.unshift(number % 2); // 將餘數插入陣列開頭
//         number = Math.floor(number / 2); // 將數字除以 2 並取整數部分
//     }

//     return binaryArray.length > 0 ? binaryArray.join('') : '0';
// }

// const result = decimalToBinary(10); // 假設轉換 10
// console.log(result); // 輸出: "1010" 