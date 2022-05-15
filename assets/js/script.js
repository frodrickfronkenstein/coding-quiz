var timerEl = document.getElementById('timer');
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
timeInterval();