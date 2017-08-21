function count1(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        let numArr = i.toString().split('');
        numArr.forEach(item => {
            if (item === "1") count++;
        });
    }

    return count;
}

console.log(count1(10));