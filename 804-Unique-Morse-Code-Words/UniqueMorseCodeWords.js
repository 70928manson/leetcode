/**
 * 先把 words 每一個轉成 mos, 再用 Set 去掉重複的
 * words[i] consists of lowercase English letters.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
const mos = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

var uniqueMorseRepresentations = function(words) {
    const charTransformMosArr = [];

    for (let i = 0; i < words.length; i++) {
        let mos = "";
        for (let j = 0; j < words[i].length; j++) {
            mos += getMosSymbol(words[i][j]);
        };
        charTransformMosArr.push(mos);
    };

    return new Set(charTransformMosArr).size;
 };

function getMosSymbol(char) {
    const index = char.charCodeAt(0) - 97;
    if (index >= 0 && index < 26) {
      return mos[index];
    } else {
      return '';
    }
  }
  