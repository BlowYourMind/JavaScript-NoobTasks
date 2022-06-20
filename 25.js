 function isPresent (string, target) {
return !!string.includes(target)
};

console.log(isPresent("abcd", "b")); // => true
console.log(isPresent("efghi", "a")); // => false