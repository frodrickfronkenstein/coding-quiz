var generateBtn = document.querySelector("button");

var questions = [
    // question 1  \n\ is the correct answer
    {
        prompt: "question 1\n(a) answer 1\n\(b) answer 2\n(c) answer 3\n(d) answer 4",
        answer:"a"
    },
    // question 2
    {
        prompt: "question 1\n(a) answer 1\n\(b) answer 2\n(c) answer 3\n(d) answer 4",
        answer:"a"
    },
    // question 3
    {
        prompt: "question 1\n(a) answer 1\n\(b) answer 2\n(c) answer 3\n(d) answer 4",
        answer:"a"
    },
    // question 4
    {
        prompt: "question 1\n(a) answer 1\n\(b) answer 2\n(c) answer 3\n(d) answer 4",
        answer:"a"
    },
    // question 5
    {
        prompt: "question 1\n(a) answer 1\n\(b) answer 2\n(c) answer 3\n(d) answer 4",
        answer:"a"
    },
    // question 6
    {
        prompt: "question 1\n(a) answer 1\n\(b) answer 2\n(c) answer 3\n(d) answer 4",
        answer:"a"
    },
    // question 7
    {
        prompt: "question 1\n(a) answer 1\n\(b) answer 2\n(c) answer 3\n(d) answer 4",
        answer:"a"
    },
    // question 8
    {
        prompt: "question 1\n(a) answer 1\n\(b) answer 2\n(c) answer 3\n(d) answer 4",
        answer:"a"
    },
    // question 9
    {
        prompt: "question 1\n(a) answer 1\n\(b) answer 2\n(c) answer 3\n(d) answer 4",
        answer:"a"
    },
    // question 10
    {
        prompt: "question 1\n(a) answer 1\n\(b) answer 2\n(c) answer 3\n(d) answer 4",
        answer:"a"
    },
]
function startQuiz() {
    for(var i=0; i < questions.length; i++) {
        var response = window.prompt(questions[i].prompt);
        if (response == questions [i].answer) {
        alert("Correct!");
    } else {
        alert("You foolish fool!");
        //time penalty
    }
    }
};


generateBtn.addEventListener("click", startQuiz);