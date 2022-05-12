var generateBtn = document.querySelector("#quiz");
var quizFieldEl = document.querySelector("#quiz-field");
var intro = document.querySelector("#intro");
var questions = [];

function startQuiz(event) {
    event.preventDefault();
    //clear section
    intro.remove();

    generateQuestion();
};

function generateQuestion() {
    //create question
    var questionFormEl = document.createElement("div");
    var questionEl = document.createElement("h2");
    var answerOne = document.createElement("button");
    var answerTwo = document.createElement("button");
    var answerThree = document.createElement("button");
    var answerFour = document.createElement("button");
    
    questionEl.textContent = "testing";
    answerOne.textContent = "answer 1";
    answerTwo.textContent = "answer 2";
    answerThree.textContent = "answer 3";
    answerFour.textContent = "answer 4";

    quizFieldEl.appendChild(questionFormEl);
    questionFormEl.appendChild(questionEl);
    questionFormEl.appendChild(answerOne);
    questionFormEl.appendChild(answerTwo);
    questionFormEl.appendChild(answerThree);
    questionFormEl.appendChild(answerFour);
}


generateBtn.addEventListener("click", startQuiz);