/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const ans = [];

    let keyboardArr = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

    for (let i = 0; i < words.length; i++) {
        // 先取 words[i][0] 判斷在第幾行
        let judge = words[i][0].toUpperCase();
        let row;

        for (let z = 0; z < keyboardArr.length; z++) {
            if (keyboardArr[z].includes(judge)) {
                row = keyboardArr[z];
            };
        };

        let flag = true;
        for (let j = 1; j < words[i].length; j++) {
            let char = words[i][j].toUpperCase();
            if (!row.includes(char)) {
                flag = false;
                break;
            };
        };

        if (flag) {
            ans.push(words[i]);
        };
    };

    return ans;
};