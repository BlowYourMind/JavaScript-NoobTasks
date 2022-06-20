function total(arr) {
    let sum = 0;
    arr.map(num => sum+=num)
    return sum;
}

console.log(total([1, 2, 3]));