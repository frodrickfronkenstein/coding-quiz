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
quizEl.style.display = "none";

// Evaluation DOMs
var correctResponseEl = document.querySelector("#correct");
var incorrectResponseEl = document.querySelector("#incorrect");
correctResponseEl.style.display = "none";
incorrectResponseEl.style.display = "none";

// Game Over DOMs
var gameOverEl = document.querySelector("#game-over");
var scoreEl = document.querySelector("#score");
var initialsBtnEl = document.querySelector("#initialsBtn");
gameOverEl.style.display = "none";

// Highscores DOMs
var highScoresEl = document.querySelector("#high-scores");
var scoreListEl = document.querySelector("#score-list");
var goBackBtn = document.querySelector("#go-back");
var clearHighscoresBtn = document.querySelector("#clear-highscores");
highScoresEl.style.display = "none";

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

// starts quiz with first question
var questionNumber = 0;

// start quiz
startButtonEl.addEventListener("click", function() {
    console.log("button clicked!");
    questionNumber = 0;
    beginTimer = 75;
    displayQuiz();
    createQuestions();
    quizTimer();
});

// create questions
var createQuestions = function() {
    questionEl.innerHTML = questionsArray[questionNumber].question;
    answer1El.innerHTML = questionsArray[questionNumber].answers.answerOne;
    answer2El.innerHTML = questionsArray[questionNumber].answers.answerTwo;
    answer3El.innerHTML = questionsArray[questionNumber].answers.answerThree;
    answer4El.innerHTML = questionsArray[questionNumber].answers.answerFour;
};

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

// check answers
var checkAnswer = function () {
    if (event.target.innerHTML === questionsArray[questionNumber].correctAnswer) {
        console.log(true);
        incorrectResponseEl.style.display = "none";
        correctResponseEl.style.display = "block";
        setTimeout(function () {
            correctResponseEl.style.display = "none";
        }, 1000);
    } else {
        console.log(false);
        correctResponseEl.style.display = "none";
        incorrectResponseEl.style.display = "block";
        setTimeout(function () {
            incorrectResponseEl.style.display = "none";
        }, 1000);
        beginTimer -= 10;
        timerEl.textContent = "timer " + beginTimer;
    }
};

// cycle through questions function
var cycleQuestions = function() {
    questionNumber++;
    if (questionNumber < questionsArray.length) {
        createQuestions();
    } else {
        gameOver();
    }
};

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
            gameOver();
        }
    }, 1000);
}
// stop timer
function stopTimer() {
    clearInterval(timeInterval);
    timerEl.textContent = "timer: " + beginTimer;
};

// save score
var gameOver = function() {
    stopTimer();
    displayGameOver();
    scoreEl.innerHTML = beginTimer;
};

// high scores array
var highScores = [];
// push initials and score to local storage
initialsBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    var userIdCounter = 0;
    if (document.querySelector('input[name="initials"]').value === "") {
        alert("Enter your initials");
        return false;
    }
    var userScore = scoreEl.innerHTML;
    var userInitials = document.querySelector('input[name="initials"]').value;
    var userData = {
        initials: userInitials,
        score: userScore
    };
    console.log(userData);
    userData.id = userIdCounter;
    highScores.push(userData);
    userIdCounter++;
    saveHighScores();
    displayHighscores();
    listHighScores();
});
 
//save highScores
var saveHighScores = function() {
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

var listHighScores = function() {
    var unsortedScores = JSON.parse(localStorage.getItem("highScores"));
    var sortedScores = unsortedScores.sort(function(a, b){return b.score-a.score});
    console.log(sortedScores);
    
}

goBackBtn.addEventListener("click", function() {
    displayLandingPage();
});

// Display functions ---------------------
// landing page display
var displayLandingPage = function() {
    landingPageEl.style.display = "block";
    quizEl.style.display = "none";
    gameOverEl.style.display = "none";
    highScoresEl.style.display = "none";
}

// quiz display
var displayQuiz = function() {
    landingPageEl.style.display = "none";
    quizEl.style.display = "block";
    gameOverEl.style.display = "none";
    highScoresEl.style.display = "none";
}

// enter score display
var displayGameOver = function() {
    landingPageEl.style.display = "none";
    quizEl.style.display = "none";
    gameOverEl.style.display = "block";
    highScoresEl.style.display = "none";
}

// highscore display
var displayHighscores = function() {
    landingPageEl.style.display = "none";
    quizEl.style.display = "none";
    gameOverEl.style.display = "none";
    highScoresEl.style.display = "block";
}
