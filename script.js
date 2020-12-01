// variables 
var score = 0;
var quizContainer = document.getElementById('myQuestions');
var resultsContainer = document.getElementById('results');
var timer = document.getElementById('timer');
var buttonContainer = document.getElementById('buttonContainer');
var test = document.getElementById('test');
var questionContainer = document.getElementById('questionContainer');
var btnOne = document.querySelector("#buttonOne");
var btnTwo = document.querySelector("#buttonTwo");
var btnThree = document.querySelector("#buttonThree");
var btnFour = document.querySelector("#buttonFour");
let currentState = 0;
const myQuestions = [
    {
        question: "What is the capital of Vermont?",
        answers: [
            "Montpelier",
            "Pittsburg",
            "California",
            "Mexico City",
        ],
        correctAnswer: "Montpelier"
    },
    {
        question: "Who sings 'Do You Believe in Life After Love?'",
        answers: [
            "Ozzy Osbourne",
            "Dio",
            "Cher",
            "Maroon 5",
        ],
        correctAnswer: "Cher"
    },
    {
        question: "Who was Daffy Duck's nemesis?",
        answers: [
            "Tim Burton",
            "Jon Quincy Adams",
            "Reptar",
            "Bugs Bunny",
        ],
        correctAnswer: "Bugs Bunny"
    },
    {
        question: "What's the name of that weird movie where Joaquin Phoenix falls in love with a phone?",
        answers: [
            "It",
            "She",
            "Her",
            "Sex and the City 2",
        ],
        correctAnswer: "Her"
    },
    {
        question: "According to the Chinese zodiac, if you were born in the year 1980 you were born in the year of the:",
        answers: [
            "Snake",
            "Monkey",
            "Rat",
            "Rhino",
        ],
        correctAnswer: "Monkey"
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
        if (timerLogic <= 0 || currentState > myQuestions.length) {
            clearInterval(timerInterval)
            alert("Pencils Down!")
        }
    }, 1000)
    changeQuestion()
}
test.addEventListener('click', begin)

// test.addEventListener('click', function(){
function changeQuestion() {
    var chosenAnswer = this.textContent
    if (chosenAnswer !== undefined) {

        if (chosenAnswer == myQuestions[currentState - 1].correctAnswer) {
            alert("Correct!")
            console.log("good")
        } else {
            alert("Incorrect!")
            console.log("bad")
        }
    }
    if (currentState < myQuestions.length) {
        quizContainer.textContent = myQuestions[currentState].question
        btnOne.textContent = myQuestions[currentState].answers[0];
        btnTwo.textContent = myQuestions[currentState].answers[1];
        btnThree.textContent = myQuestions[currentState].answers[2];
        btnFour.textContent = myQuestions[currentState].answers[3];
    }

    currentState++;
}

btnOne.addEventListener('click', changeQuestion);
btnTwo.addEventListener('click', changeQuestion);
btnThree.addEventListener('click', changeQuestion);
btnFour.addEventListener('click', changeQuestion);