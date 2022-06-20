function fiveCharactersOrFewerOnly(arr) {
    let arr1 = [];
    arr.map(word => word.length<=5 && arr1.push(word))
    return arr1;
}
// test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));
// ["by", "dog", "wolf", "eaten"]