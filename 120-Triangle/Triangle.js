/**
    從倒數第二行開始
    以範例一來說, 分成
    6 + Min(4, 1)  5 + Min(1,8) 7+ Min(8,3)
    接著是
    3+ Min( 6 + Min(4, 1)  5 + Min(1,8) ),  4 + Min ( 5 + Min(1,8) 7+ Min(8,3))
    最後
    1 + Min ( 3+ Min( 6 + Min(4, 1)  5 + Min(1,8) ),  4 + Min ( 5 + Min(1,8) 7+ Min(8,3)))
 */

/**
     圖解

      2
     3 4
    6 5 7
   4 1 8 3

      2
     3 4
    7 6 10

      2
     9 10

     11
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]);
        };
    };
    return triangle[0][0];
};
