/**
    用外積公式 brute force
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let result = 0;

    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            for (let z = j + 1; z < points.length; z++) {
                // 
                let a = points[i]
                let b = points[j]
                let c = points[z]

                let area = Math.abs(
                    a[0] * (b[1] - c[1]) +
                    b[0] * (c[1] - a[1]) +
                    c[0] * (a[1] - b[1])
                ) / 2;

                if (area > result) {
                    result = area;
                };
            };
        };
    };

    return result;
};