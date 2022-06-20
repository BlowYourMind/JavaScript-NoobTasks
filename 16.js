function evensOnly(arr) {
    let arr1 = [];
    arr.map(num => num%2 === 0 && arr1.push(num))
    return arr1;
}
// test
console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]