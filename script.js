// variables 
var score = 0;
var quizContainer = document.getElementById('myQuestions');
var resultsContainer = document.getElementById('results');
var timer = document.getElementById('timer');
var buttonContainer = document.getElementById('buttonContainer');
var test = document.getElementById('test');
var questionContainer = document.getElementById('questionContainer');
const myQuestions = [
    {
        question: "What is the capital of Vermont?",
        answers: [
            { a: "Montpelier", right: true },
            { b: "Pittsburg", wrong: false },
            { c: "California", wrong: false },
            { d: "Mexico City", wrong: false }
        ],
    },
    {
        question: "Who sings 'Do You Believe in Life After Love?'",
        answers: [
            { a: "Ozzy Osbourne", wrong: false },
            { b: "Dio", wrong: false },
            { c: "Cher", right: true },
            { d: "Maroon 5", wrong: false }
        ],
    },
    {
        question: "Who was Daffy Duck's nemesis?",
        answers: [
            { a: "Tim Burton", wrong: false },
            { b: "Jon Quincy Adams", wrong: false },
            { c: "Reptar", wrong: false },
            { d: "Bugs Bunny", right: true }
        ],
    },
    {
        question: "What's the name of that weird movie where Joaquin Phoenix falls in love with a phone?",
        answers: [
            { a: "It", wrong: false },
            { b: "She", wrong: false },
            { c: "Her", right: true },
            { d: "Sex and the City 2", wrong: false }
        ],
    },
    {
        question: "According to the Chinese zodiac, if you were born in the year 1980 you were born in the year of the:",
        answers: [
            { a: "Snake", wrong: false },
            { b: "Monkey", right: true },
            { c: "Rat", wrong: false },
            { d: "Rhino", wrong: false }
        ],
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

// test.addEventListener('click', function(){

// })
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