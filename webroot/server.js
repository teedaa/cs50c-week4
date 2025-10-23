"use strict"

// Questions for the quiz

const questions = [
    { question: "What month are we in?", choices: ["October", "Red", "December"], correct: "October"} ,
    { question: "What is the name of the main character in Dragon Ball Z?", choices: ["Naruto", "Goku", "Master Roshi"], correct: "Goku"},
    { question: "How many days are in a week?", choices: ["5", "6", "7"], correct: "7"},
    { question: "Is mayonnaise an instrument?", choices: ["No Patrick mayonnaise is not an instrument.", "Yes"], correct: "No Patrick mayonnaise is not an instrument." }
]

// Variables to keep track of the current turn and score

let turn = 0;
let score = 0;

// Function to display the current question and choices
function showQuestion(){
    const choices = questions[turn].choices;
    document.getElementById("counter").innerText = "Score: " + score + " out of " + questions.length;
    document.getElementById("question").innerHTML = "";
    
    document.getElementById("question").innerText = questions[turn].question;


    document.getElementById("choices").innerHTML = "";
// Loop through choices and create radio buttons
    for (let i = 0; i < choices.length; i ++) {
        const container = document.getElementById("choices");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "question";
        radio.value = choices[i];

        const label = document.createElement("label");
        label.innerText = choices[i];

        container.appendChild(radio);
        container.appendChild(label);
        container.appendChild(document.createElement("br"));
        
    }
}
// Function to check the selected answer
function checkAnswer() {
const selected = document.querySelector("input[name='question']:checked");
// If no answer is selected, prompt the user to pick one
if (!selected) {
    document.getElementById("message").innerText = "Please pick an answer";

    return;

} 
  const userAnswer = selected.value;
  const correctAnswer= questions[turn].correct;

if (userAnswer === correctAnswer) {
    score = score + 1;
    document.getElementById("message").innerText = "Correct!";
} else {
    document.getElementById("message").innerText = "Wrong!";
}

// Move to the next turn

turn = turn + 1;

// If there are more questions, show the next one; otherwise, end the game
if (turn < questions.length) {
    document.getElementById("question").innerHTML ="";
    document.getElementById("choices").innerHTML= ""; 
    showQuestion();
} else {
    document.getElementById("message").innerText =" Game over! Your final score is " + score + " out of " + questions.length;

    document.getElementById("choices").innerHTML ="";
    document.getElementById("question").innerHTML= "";
}

}

document.getElementById("submit").addEventListener("click", checkAnswer);

showQuestion();
