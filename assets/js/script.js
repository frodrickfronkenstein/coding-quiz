var generateBtn = document.querySelector("#quiz");
var quizFieldEl = document.querySelector("#quiz-field");
var intro = document.querySelector("#intro");
var questions = [{qs: "testing a", aone: "one", atwo: "two", athree: "three", afour: "four"}];

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
    
    questionEl.textContent = questions[0].qs;
    answerOne.textContent = questions[0].aone;
    answerTwo.textContent = questions[0].atwo;
    answerThree.textContent = questions[0].athree;
    answerFour.textContent = questions[0].afour;

    quizFieldEl.appendChild(questionFormEl);
    questionFormEl.appendChild(questionEl);
    questionFormEl.appendChild(answerOne);
    questionFormEl.appendChild(answerTwo);
    questionFormEl.appendChild(answerThree);
    questionFormEl.appendChild(answerFour);
}


generateBtn.addEventListener("click", startQuiz);