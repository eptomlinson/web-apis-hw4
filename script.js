// var quiz questions

// var question1 = prompt("What is black and white and read all over?")
// should i use an index of questions and answers to make code more dry? if so how? 

// ANUSTART 

// get questions to work first - container divs, LookMaNoHTML
// get the scores and other vars to work in suite 
// get the time to work 

// When the page loads, 
// declare function .timeEl - call Jquary 
// declare function global variables - userscore, container, leaderboard
// button with toggle(logic) to start timer/quiz 
// indentify var(x) 
// quiz timer starts - setInterval(someFunction, seconds*1000)
// declare function [array of object(s)] - questions, options, and/or [booleans]: Each question is an object, set of ()
// array starts - identify for loop  identify the var, i>x, x++. (doesn't have to be < symbol) use === to have a concrete True answer
var score = 0;
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var test = document.getElementById('test');
var timer = document.getElementById('timer');
var buttonContainer = document.getElementById('buttonContainer');
var questionContainer = document.getElementById('questionContainer');
// tutor helped with begin function 
function begin(){
    // console.log("it works") 
    buttonContainer.setAttribute("class", "hide")
    var timerLogic = 60;
    var timerInterval = setInterval(function(){
        timerLogic--
        timer.textContent = timerLogic
        if(timerLogic <=0){
            clearInterval(timerInterval)
            alert("Time's Up!")
        }
    },1000)
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
function nextQuestion(){
    // if it matches one of the three wrong answers, move on with no point added
    if () {
        // ask question 1 
    } 
    // doesn't match one of the three wrong answers, check against right answer. if right, add point to total, next question
    else {
        
    }
}

// function results(){
//     var question1 = questions.
//     if (condition) {
        
//     } else {
        
//     }
// }
// var questions = 