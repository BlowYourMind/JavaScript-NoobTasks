const countLetters = function (string) {
    return string.split('').reduce((prev, curr) => {
            prev[curr] ? prev[curr]++ : prev[curr] = 1;
            console.log(prev)
            return prev;
        }, {});
};

console.log(countLetters("abbcccddddeeeee")) // => {a:1, b:2, c:3, d:4, e:5}