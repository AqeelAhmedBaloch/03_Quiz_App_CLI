#! /usr/bin/env node
import inquirer from "inquirer";
console.log('==============================');
console.log("Welcome to Daily Quiz");
console.log("Each Question is of 10 marks");
console.log('==============================\n');
let marks = 0;
let userInput = await inquirer.prompt([
    {
        type: "list",
        name: "question1",
        message: "1. Which is the Capital city of Pakistan?",
        choices: ["Karachi", "Larkana", "Islamabad", "Lahore"],
    },
    {
        type: "list",
        name: "question2",
        message: "2. How many items name Ahmed came in Quran",
        choices: [1, 2, 3, 10],
    },
    {
        type: "list",
        name: "question3",
        message: "3. How many surah are there in holy Quran",
        choices: [120, 114, 110, 125],
    },
    {
        type: "list",
        name: "question4",
        message: "4. Most populated city in Pakistan",
        choices: ["Larkana", "Karachi", "Lahore", "Rawalpindi"],
    },
    {
        type: "list",
        name: "question5",
        message: "5. How many days are there in leap year?",
        choices: [365, 355, 366, 370],
    },
]);
const { question1, question2, question3, question4, question5 } = userInput;
// this is called destructuring
let correctOption = ["Islamabad", 1, 114, "Karachi", 366];
if (question1 === "Islamabad")
    marks += 10;
if (question2 === 1)
    marks += 10;
if (question3 === 114)
    marks += 10;
if (question4 === "Karachi")
    marks += 10;
if (question5 === 366)
    marks += 10;
console.log(marks);
function myAnswers() {
    console.log(`\nCorrect Option :`, correctOption);
    if (marks == 50) {
        console.log(`\nCongratulation! You got full ${marks} marks`);
    }
    else if (marks > 0) {
        console.log(`\nYou got ${marks} marks, out of 50`);
    }
    else {
        console.log(`\nUnfortunately! You got ${marks} marks out of 50`);
    }
}
myAnswers();
