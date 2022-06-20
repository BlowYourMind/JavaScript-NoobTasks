function checkExam(correctAnswers , studentsAnswers  ){
    let score = 0;

    studentsAnswers.map((element, index) => {
        if (element === "") {
            score += 0;
        } else if (element === correctAnswers[index]) {
            score += 4;
        } else {
            score -= 1;
        }
    })
    return score > 0 ? score : 0;
}
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // => 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // => 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // => 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // => 0