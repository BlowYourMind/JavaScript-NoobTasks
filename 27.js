function findNeedle(arr){
   return arr.map((element,index) => element ==='needle' && console.log( ('found the needle at position ' + index) ))
}

findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])