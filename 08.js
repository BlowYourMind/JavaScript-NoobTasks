function countPositivesSumNegatives(arr) {
    let positiveNumbers = 0;
    let negativeNumbers = 0;
    if (arr === null || arr.length === 0) {
        return [];
    } else {
       arr.forEach((num) => num > 0 ? positiveNumbers++ : negativeNumbers += num);
    }
    return [positiveNumbers , negativeNumbers];
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))