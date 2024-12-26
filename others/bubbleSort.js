function bubbleSort(arr) {
    let len = arr.length;

    // 執行次數
    for(let i = 0; i < len; i++) {
        // 比較
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j+1);
            };
        };
    };

    return arr;
};

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
};
