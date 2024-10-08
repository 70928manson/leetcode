/**
 * 找出不重複 characters subString
 * s consists of English letters, digits, symbols and spaces.
 * 
 * 範例測資 s=" ", s ="dvdf" , s ="aabaab!bb"
 */

/**
 * @param {string} s
 * @return {number}
 */

// 優化版本
var lengthOfLongestSubstring = function(s) {
    var res = 0;
    var str = "";

    for (let i = 0; i < s.length; i++) {
        const index = str.indexOf(s[i]);

        if (index === -1) {
            str += s[i];
            res = res < str.length ? str.length : res;
        } else {
            // 出現跟 str 內重複的字母, 代表新的一輪要開始了, str 去掉重複字母 & 重複字母前的字串 
            str = str.slice(index+1) + s[i];
        }
    }
    return res;
}


// 腦袋打結版本
// var lengthOfLongestSubstring = function(s) {
//     let res = 0;
//     let str = "";

//     for (let i = 0; i < s.length; i++) {
//         const index = str.indexOf(s[i]) 
//         if (index === -1) {
//             str = `${str}${s[i]}`;
//         } else {
//             res = str.length > res ? str.length : res;

//             str = `${str}${s[i]}`;
//             str = str.slice(index+1);
//         }
//     }

//     return str.length > res ? str.length : res;
// };
