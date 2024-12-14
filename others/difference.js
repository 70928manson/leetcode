// difference 會接收兩個陣列，並回傳第一個陣列中獨有的元素，減少對重複值的不必要操作。

difference([], []); // []
difference([1, 1, 2, 3], [2, 3]); // [1, 1]
difference([1, 2, 3], [1, 2, 3, 4]); // []
difference([4, 3, 2, 1], [1, 2, 3]); // [4]

function difference(arr1, arr2) {
    const ans = [];
    
    for (const item of arr1) {
        if (arr2.include(item) === false && item !== undefined) {
            ans.push(item);
        };
    };

    return ans;
}