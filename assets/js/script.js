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

// Evaluation DOMs
var correctResponseEl = document.querySelector("#correct");
var incorrectResponseEl = document.querySelector("#incorrect");
document.querySelector("#correct").style.display = "none";
document.querySelector("#incorrect").style.display = "none";

// click on answers
answer1El.addEventListener("click", function(event) {
    checkAnswer();
    cycleQuestions();
});
answer2El.addEventListener("click", function(event) {
    checkAnswer();
    cycleQuestions();
});
answer3El.addEventListener("click", function(event) {
    checkAnswer();
    cycleQuestions();
});
answer4El.addEventListener("click", function(event) {
    checkAnswer();
    cycleQuestions();
});

// cycle through questions function
var cycleQuestions = function() {
    questionNumber++;
    if (questionNumber < questionsArray.length) {
        createQuestions();
    } else {
        quizEl.style.display = "none";
        stopTimer();
    }
};

// check answers
var checkAnswer = function () {
    if (event.target.innerHTML === questionsArray[questionNumber].correctAnswer) {
        console.log(true);
        document.querySelector("#correct").style.display = "block";
        setTimeout(function () {
            document.querySelector("#correct").style.display = "none";
        }, 1000);
    } else {
        console.log(false);
        document.querySelector("#incorrect").style.display = "block";
        setTimeout(function () {
            document.querySelector("#incorrect").style.display = "none";
        }, 1000);
        beginTimer -= 10;
    }
};

// questions array
var questionsArray = [
    {
        question: "Arrays in javaScript can be used to store _____.",
        answers: {
            answerOne: "numbers and strings",
            answerTwo: "other arrays",
            answerThree: "booleans",
            answerFour: "all of the above"
        },
        correctAnswer: "all of the above"
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            answerOne: "string",
            answerTwo: "booleans",
            answerThree: "alerts",
            answerFour: "numbers"
        },
        correctAnswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        answers: {
            answerOne: "quotes",
            answerTwo: "curly brackets",
            answerThree: "parentheses",
            answerFour: "square brackets"
        },
        correctAnswer: "parentheses"
    },
    {
        question: "String values must be enclosed with ______ when being assigned to variables.",
        answers: {
            answerOne: "commas",
            answerTwo: "curly brackets",
            answerThree: "quotes",
            answerFour: "parentheses"
        },
        correctAnswer: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            answerOne: "JavaScript",
            answerTwo: "terminal",
            answerThree: "for loops",
            answerFour: "console.log"
        },
        correctAnswer: "console.log"
    }
];

// start timer
var beginTimer = 75;
function quizTimer() {
    timeInterval = setInterval(function () {
        if (beginTimer > 0) {
            timerEl.textContent = "timer: " + beginTimer;
            beginTimer--;
        }else if (beginTimer === 0) {
            timerEl.textContent = "OUT OF TIME!";
        } else {
            stopTimer();
        }
    }, 1000);
}
// stop timer
function stopTimer() {
    clearInterval(timeInterval);
};

// starts quiz with first question
var questionNumber = 0;

// create questions
var createQuestions = function() {
    questionEl.innerHTML = questionsArray[questionNumber].question;
    answer1El.innerHTML = questionsArray[questionNumber].answers.answerOne;
    answer2El.innerHTML = questionsArray[questionNumber].answers.answerTwo;
    answer3El.innerHTML = questionsArray[questionNumber].answers.answerThree;
    answer4El.innerHTML = questionsArray[questionNumber].answers.answerFour;
};

// start quiz
startButtonEl.addEventListener("click", function() {
    console.log("button clicked!");
    landingPageEl.style.display = "none";
    quizEl.style.display = "block";
    createQuestions();
    quizTimer();
});