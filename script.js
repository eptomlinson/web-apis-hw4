// variables 
var score = 0;
var quizContainer = document.getElementById('myQuestions');
var resultsContainer = document.getElementById('results');
var test = document.getElementById('test');
var timer = document.getElementById('timer');
var buttonContainer = document.getElementById('buttonContainer');
var questionContainer = document.getElementById('questionContainer');
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
    },
    {
        question: "What's the name of that weird movie where Joaquin Phoenix falls in love with a phone?",
        answers: {
            a: "It",
            b: "She",
            c: "Her",
            d: "Sex and the City 2"
        },
        correctAnswer: "c"
    },
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
// https://www.sitepoint.com/simple-javascript-quiz/ 
function buildQuiz() {
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // variable to store the list of possible answers
            const answers = [];

            for (letter in currentQuestion.answers) {

                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
    });

    const answers = [];

    for (letter in currentQuestion.answers) {
        answers.push(
            `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
        );
    }
    output.push(
        `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
    );

    quizContainer.innerHTML = output.join('');
}