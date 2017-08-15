function numCount(arr, num) {
    let count = 0;
    arr.forEach(item => {
        if (item === num) {
            count++;
        }
    });

    return count;
}
numCount([1, 3, 7, 1 ,4], 1);