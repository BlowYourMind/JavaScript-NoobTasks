const voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
        return arr.reduce((a, b) => {
            if (b.age >= 18 && b.age <= 25 && b.voted) {
                a.numYoungVotes++;
            }
            if (b.age >= 18 && b.age <= 25) {
                a.numYoungPeople++;
            }
            if (b.age >= 26 && b.age <= 35 && b.voted) {
                a.numMidVotesPeople++;
            }
            if (b.age >= 26 && b.age <= 35) {
                a.numMidPeople++;
            }
            if (b.age >= 36 && b.age <= 55 && b.voted) {
                a.numOldVotesPeople++;
            }
            if (b.age >= 36 && b.age <= 55) {
                a.numOldsPeople++;
            }
            return {...a};
        }, {
            numYoungVotes: 0,
            numYoungPeople: 0,
            numMidVotesPeople: 0,
            numMidPeople: 0,
            numOldVotesPeople: 0,
            numOldsPeople: 0
        });

}
console.log(voterResults(voters));

