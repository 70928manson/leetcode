/**
 * a~z 0~9 - ! . , ' '
 * sentence only contains lowercase English letters, digits, ' ', '-', '!', '.', and ','.
 */

/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    let ans = 0;

    const words = sentence.split(' ');

    for (const word of words) {
        let punctuationCount = 0;
        let hyphensCount = 0;

        for (let i = 0; i < word.length; i++) {
            let char = word[i];

            if (char >= 0 && char <= 9) {
                break;
            };

            if (char === "!" || char === "." || char === ",") {
                if (punctuationCount > 0 || i !== word.length - 1) {
                    break;
                }
                punctuationCount++;
            };

            if (char === "-") {
                if (hyphensCount > 0) {
                    break;
                }
                hyphensCount++;

                let a = i > 0 && word[i-1] >= 'a' && word[i-1] <= 'z';
                let b = i < word.length-1 && word[i+1] >= 'a' && word[i+1] <= 'z';

                if (a === false || b === false) {
                    break;
                }
            }

            if (i === word.length - 1) {
                ans++;  
            };
        };
    };

    return ans;
};