// constant DOMs
var timerEl = document.getElementById('timer');

// Landing page DOM
var landingPageEl = document.querySelector("#landing-page");
var startButtonEl = document.querySelector("#start-quiz");


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

// start quiz
startButtonEl.addEventListener("click", function() {
    console.log("button clicked!");
    landingPageEl.style.display = "none";
    quizTimer();
});