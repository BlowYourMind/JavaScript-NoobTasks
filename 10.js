function  checkForRoots(arr){
   return  arr.map(num => Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : Math.pow(num,2) )
}
console.log(checkForRoots([4, 3, 9, 7, 2, 1]));