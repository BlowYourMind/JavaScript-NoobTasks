function flatten(arr) {
  let arrayCombined =[];
     arr.map(array => arrayCombined.push(array))
    return arrayCombined
}

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];