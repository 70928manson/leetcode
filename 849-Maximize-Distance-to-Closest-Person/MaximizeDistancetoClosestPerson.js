/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    // 座位總數為 2 的話, 可以直接 return 為 1
    if (seats.length === 2) {
        return 1;
    };

    let ans = 0;

    // 蒐集 1 的位置 (哪些椅子有坐人)
    const occupiedSeats = [];

    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            occupiedSeats.push(i);
        };
    };

    // 3 種狀況:
    //   1. 最左沒人的話, 做最左
    //   2. 最右沒人的話, 做最右
    //   3. 坐在某兩人之間

    if (occupiedSeats.includes(0) === false) {
        const distance = occupiedSeats[0]
        if (distance > ans) {
            ans = distance;
        };
    };

    if (occupiedSeats.includes(seats.length - 1) === false) {
        const distance = seats.length - 1 - occupiedSeats[occupiedSeats.length - 1]
        if (distance > ans) {
            ans = distance;
        };
    };

    for (let i = 1; i < occupiedSeats.length; i++) {
        const distance = Math.floor((occupiedSeats[i] - occupiedSeats[i - 1]) / 2);
        if (distance > ans) {
            ans = distance;
        };
    }

    return ans;
};