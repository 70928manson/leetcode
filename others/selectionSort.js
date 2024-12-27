function selectionSort(arr) {
    let index;
    for (let i = 0; i < arr.length; i++) {
        index = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[index]) {
                index = j;
            }
        }
        
        swap(arr, i, index);
    }

    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}