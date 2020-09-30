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
var resultsContainer = document.getElementById('submit');
var test = document.getElementById('test');
var timer = document.getElementById('timer');
var buttonContainer = document.getElementById('buttonContainer');

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
// var questions = 