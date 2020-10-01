// When the page loads, 
// declare function .timeEl - call Jquary 
// declare function global variables - userscore, container, leaderboard
// button with toggle(logic) to start timer/quiz 
// indentify var(x) 
// quiz timer starts - setInterval(someFunction, seconds*1000)
// declare function [array of object(s)] - questions, options, and/or [booleans]: Each question is an object, set of ()
// array starts - identify for loop  identify the var, i>x, x++. (doesn't have to be < symbol) use === to have a concrete True answer
var score = 0;
var quizContainer = document.getElementById('myQuestions');
var resultsContainer = document.getElementById('results');
var test = document.getElementById('test');
var timer = document.getElementById('timer');
var buttonContainer = document.getElementById('buttonContainer');
var questionContainer = document.getElementById('questionContainer');
// tutor helped with begin function 
function begin() {
    // console.log("it works") 
    buttonContainer.setAttribute("class", "hide")
    var timerLogic = 60;
    var timerInterval = setInterval(function () {
        timerLogic--
        timer.textContent = timerLogic
        if (timerLogic <= 0) {
            clearInterval(timerInterval)
            alert("Time's Up!")
        }
    }, 1000)
}
test.addEventListener('click', begin)
// ***********************
const myQuestions = [
    {
        question: "What is the capital of Vermont?",
        answers: {
            a: "Montpelier",
            b: "Pittsburg",
            c: "California",
            d: "Mexico City"
        },
        correctAnswer: "a"
    },
    {
        question: "Who sings 'Do You Believe in Life After Love?'",
        answers: {
            a: "Ozzy Osbourne",
            b: "Dio",
            c: "Cher",
            d: "Maroon 5"
        },
        correctAnswer: "c"
    },
    {
        question: "Who was Daffy Duck's nemesis?",
        answers: {
            a: "Tim Burton",
            b: "Jon Quincy Adams",
            c: "Reptar",
            d: "Bugs Bunny"
        },
        correctAnswer: "d"
    }
    {
        question: "What's the name of that weird movie where Joaquin Phoenix falls in love with a phone?",
        answers: {
            a: "It",
            b: "She",
            c: "Her",
            d: "Sex and the City 2"
        },
        correctAnswer: "c"
    }
    {
        question: "According to the Chinese zodiac, f you were born in the year 1980 you were born in the year of the:",
        answers: {
            a: "Snake",
            b: "Monkey",
            c: "Rat",
            d: "Rhino"
        },
        correctAnswer: "b"
    }
];
// https://www.sitepoint.com/simple-javascript-quiz/ 
function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an HTML radio button
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');

    myQuestions.forEach((currentQuestion, questionNumber) => {
        // the code we want to run for each question goes here
    });

    // we'll want to store the list of answer choices
    const answers = [];

    // and for each available answer...
    for (letter in currentQuestion.answers) {

        // ...add an html radio button
        answers.push(
            `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
        );
    }

    // add this question and its answers to the output
    output.push(
        `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
    );

    quizContainer.innerHTML = output.join('');
}