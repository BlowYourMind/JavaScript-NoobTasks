const arr = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true,
];
let counter = 0;
arr.map(element => element === true && counter ++ )
console.log(counter);