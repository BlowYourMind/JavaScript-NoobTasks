function sqrtNumbers (arr){
    let sum = 0;
    arr.map(num => sum += Math.pow(num,2))
    return sum;
}
console.log(sqrtNumbers([1, 2, 2]));