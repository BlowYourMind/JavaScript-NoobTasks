
function swapCase(string) {
    return string.split(" ").map((element, index) => index % 2 === 0 ? element.toUpperCase() : element ).join(' ');

}
console.log(swapCase("hey gurl, lets javascript together sometime"))