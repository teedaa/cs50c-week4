"use strict"

const questions = [
    { question: "What month are we in?", choices: ["October", "Red", "December"], correct: "October"} ,
    { question: "What is the name of the main character in Dragon Ball Z?", choices: ["Naruto", "Goku", "Master Roshi"], correct: "Goku "},
    { question: "How many days are in a week?", choices: ["5", "6", "7"], correct: "7"},
    { question: "Is mayonnaise an instrument?", choices: ["No Patrick mayonnaise is not an instrument.", "Yes"], correct: "No Patrick mayonnaise is not an instrument" }
]

const choices = questions[turn].choices;

let turn = 0;
let score = 0;

// document.getElementById("submit").addEventListener("click", checkAnswer);

// function checkAnswer(){

// }

function showAnswer(){
    document.getElementById("question").innerHTML = "";
    
    document.getElementById("question").innerText = questions[turn].question;

    for ( let i = 0; i < choices.length; i++ ){
        const choices = questions[turn].choices;
    }

    document.getElementById("choices").innerHTML = "";

    for (let i = 0; i < choices.length; i ++) {
        const container = document.getElementById("choices");

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "question";
        radio.value= choices[i];

        const label = document.createElement("label");
        label.innerText = choices[i];

        container.appendChild(radio);
        container.appendChild(label);
        container.appendChild(document.createElement("br"));
        
    }

}