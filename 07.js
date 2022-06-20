function countPositivesSumNegatives(arr){
    let positiveNumbers = 0;
arr.map(num=> num >0 && (positiveNumbers+=num))
    return positiveNumbers;
}
console.log(countPositivesSumNegatives([1, -4, 7, 12]));