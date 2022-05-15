// constant DOMs
var timerEl = document.getElementById('timer');

// Landing page DOMs
var landingPageEl = document.querySelector("#landing-page");
var startButtonEl = document.querySelector("#start-quiz");

// Quiz DOMs
var quizEl = document.querySelector("#quiz");
var questionEl = document.querySelector("#question");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
document.querySelector("#quiz").style.display = "none";

// questions array
var questionsArray = [
    {
        question: "Test1:",
        answers: {
            answerOne: "answer",
            answerTwo: "answer",
            answerThree: "answerC",
            answerFour: "answer"
        },
        correctAnswer: "answerC"
    },
    {
        question: "Test1:",
        answers: {
            answerOne: "answer",
            answerTwo: "answer",
            answerThree: "answerC",
            answerFour: "answer"
        },
        correctAnswer: "answerC"
    },
    {
        question: "Test1:",
        answers: {
            answerOne: "answer",
            answerTwo: "answer",
            answerThree: "answerC",
            answerFour: "answer"
        },
        correctAnswer: "answerC"
    },
    {
        question: "Test1:",
        answers: {
            answerOne: "answer",
            answerTwo: "answer",
            answerThree: "answerC",
            answerFour: "answer"
        },
        correctAnswer: "answerC"
    }
];

// basic timer function
function quizTimer() {
    var beginTimer = 75;

    var timeInterval = setInterval(function () {
        if (beginTimer > 0) {
            timerEl.textContent = "timer: " + beginTimer;
            beginTimer--;
        }else if (beginTimer === 0) {
            timerEl.textContent = "OUT OF TIME!";
        } else {
            clearInterval(timeInterval);
        }
    }, 1000);
}

// starts quiz with first question
var questionNumber = 0;

var createQuestions = function() {
    questionEl.innerHTML = questionsArray[questionNumber].question;
    answer1El.innerHTML = questionsArray[questionNumber].answers.answerOne;
    answer2El.innerHTML = questionsArray[questionNumber].answers.answerTwo;
    answer3El.innerHTML = questionsArray[questionNumber].answers.answerThree;
    answer4El.innerHTML = questionsArray[questionNumber].answers.answerFour;
};

var cycleQuestions = function() {
    
}

// start quiz
startButtonEl.addEventListener("click", function() {
    console.log("button clicked!");
    landingPageEl.style.display = "none";
    quizEl.style.display = "block";
    createQuestions();
    quizTimer();
});