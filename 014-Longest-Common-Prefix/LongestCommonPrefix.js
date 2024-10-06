/**
 * strs 陣列裡一定有東西
 * strs[i] 長度 0~200, 且只會出現小寫英文字母
 * 比對前兩個字串，從頭開始取出相同的部分為共同字首
 * 後面的字串只要與目前的共同字首比對即可
 */

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    let commonPrefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        if(strs[i].length == 0) return "";

        let tempStr = "";

        for (let z = 0; z < strs[i].length; z++) {
            if (commonPrefix[z] === strs[i][z]) {
                tempStr += strs[i][z];
            } else {
                commonPrefix = tempStr;
                break;
            };
        };
    };

    return commonPrefix;
};
