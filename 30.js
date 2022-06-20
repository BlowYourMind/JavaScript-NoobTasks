function monkeyCount(integer){
    return Array.from(Array(integer+1).keys()).slice(1)
}

console.log(monkeyCount(5))