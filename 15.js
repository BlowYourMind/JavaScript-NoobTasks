function fiveAndGreaterOnly(arr) {
  let arr1 = [];
    arr.map(num => num>5 && arr1.push(num))
    return arr1;
}
// test
console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]