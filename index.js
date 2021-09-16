const readLineSync = require("readline-sync");
const questionsAnswers = {
  "What is my favorite food?": "Biryani",
  "Which phone OS do I prefer?": "iOS",
  "What is my favorite movie genre?": "Mystery"
}
let currentScore = 0;
let scoreboard = {};

function theGame() {
  let username = readLineSync.question("Hello! May I ask you your name, please? ");
  console.log(`Welcome, ${username}, to 'HOW WELL DO YOU KNOW HARRY?'.`);
  for (question in questionsAnswers) {
    let userAnswer = readLineSync.question(`${question}\n`);
    if (userAnswer.toUpperCase() === questionsAnswers[question].toUpperCase()) {
      currentScore ++;
      console.log(`Correct!\nCurrent score: ${currentScore}`)
    }
    else {
      console.log(`Wrong!\nThe correct answer is: ${questionsAnswers[question]}`)
    }
    console.log("--------")
  }
  console.log(`Game ends! Thank you for playing.\nYour final score: ${currentScore}`)
}

theGame();