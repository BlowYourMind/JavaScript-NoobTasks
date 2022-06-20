const shiftLetters = function (string) {
   return string.split(" ").map(word =>
    word.split("").map(letter => String.fromCharCode((letter.charCodeAt() + 1))).join('') ).join(' ')
}

console.log(shiftLetters("hello")) // => 'ifmmp'
console.log(shiftLetters("abcxyz")) // => "bcdyz{