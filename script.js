// Variables 
var score = 0;
var startButton= document.querySelector('#start-button');
var timer = document.querySelector('#timer');
var questions = document.querySelector('#quiz-spot');


// Questions and Answers for Quiz
var questions = [
    { 
        question: "What does HTML stand for?",
        choices: ['HyperText Markup Language', 'HyperTonal Markup Lexicon','High Text Main Language', 'Hello There My Love'],
        answer:  choices[0]
    },
    { 
        question: "What does CSS stand for?",
        choices: ['Cascading Style Sheets', 'Coding Script Style', 'Code Style Stuff', 'Cascading Step Script'],
        answer: choices[0] 
    },
    { 
        question: "Javascript files end in:",
        choices: ['.java', '.js', 'jscript', '.javascript'],
        answer: choices[1]   
    },
    { 
        question: "Which of these are NOT a type of data",
        choices: ['strings', 'integers', 'booleans', 'color' ],
        answer: choices[3]
    },
    { 
        question: "What does DOM stand for?",
        choices: ['Document Object Model', 'Documents On Monday', 'Decision Object Maker', 'Document Order Maker'],
        answer: choices[0]
    },
    { 
        question: "What does API stand for",
        choices: ['Apple Programming Intelligence', 'Artificial Program Interface', 'Application Programming Interfaces', 'A Paid Intern'],
        answer: choices[2]
    },
    { 
        question: "CSS files end in:",
        choices: ['.css', '.cstyles', 'cascadess', '.c'],
        answer: choices[0]
    },
    { 
        question: "What is NOT an example of a web browser",
        choices: ['Mozilla Firefox', 'Google Chrome', 'Apple Safari', 'Microsoft Windows'],
        answer: choices[3]
    },
    { 
        question: "What is an md file",
        choices: ['Markdown', 'Minimal Distractions', 'Medical Doctor', 'Markup Description'],
        answer: choices[0]
    },
    { 
        question: "WWW stands for:",
        choices: ['Wonderful Wild World', 'World Wide Web', 'World Wide Weather'],
        answer: choices[0]
    },
]


//question function
function questionSpot(q){
    var questionsDiv = document.getElementById('.quiz-spot');
    questionsDiv.textContent = q.question;


}


//timer function


//start button
startButton.addEventListener('click', questionSpot);

questionSpot(startButton);