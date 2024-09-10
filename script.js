const submissions = [
    {
        name: "Jane",
        score: 95,
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        passed: true
    }
];

function addSubmission(array, newName, newScore) {

    let myObject = {
        name: newName,
        score: newScore,
        passed: newScore >= 60 ? true : false
    };

    array.push(myObject);
}

addSubmission(submissions, "Brandon", 72);

console.log(submissions);

deleteSubmissionByIndex = (array, index) => {
    submissions.splice(array, index);
}

deleteSubmissionByIndex(0,1);

console.log(submissions);

deleteSubmissionByName = (array, name) => {
    submissions.findIndex(x => x.name === "Joe");
    submissions.splice(array, name);
}

deleteSubmissionByName(0,1);

console.log(submissions);

editSubmission = (array, index, score) => {
    if (index >= 0 && index < array.length) {
        const edit = submissions[index];
        edit.score = score !== undefined ? score : edit.score;
        edit.passed = score >= 60 ? true : false;
    } else {
        console.log("Invalid index.");
    }
}

editSubmission(submissions, 1, 55);

console.log(submissions);

findSubmissionByName = (array, name) => {
    return array.find(x => x.name === name) || "Name not found.";
}

console.log(findSubmissionByName(submissions, "Jack"));

findLowestScore = (array) => {
    if (array.length === 0) return 0;

    return array.reduce((lowest, person) => {
    return person.score < lowest.score ? person : lowest;
  });
}

console.log(findLowestScore(submissions));

findAverageScore = (array) => {
    const scores = array.map(person => person.score);
    if (scores.length === 0) return 0;

    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}

console.log("Average Score: " + findAverageScore(submissions));

filterPassing = (array) => {
    return array.filter(person => person.score >= 60);
}

console.log(filterPassing(submissions));

filter90AndAbove = (array) => {
    let score90 = array.filter(person => person.score >= 90);
    if (score90.length === 0) return "No Scores At Or Above 90.";
    return score90;
}

console.log(filter90AndAbove(submissions));








