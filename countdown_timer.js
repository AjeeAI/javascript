let timerInterval;
let totalSeconds = 0;

function updateDisplay(){
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (minutes <10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("timerDisplay").textContent = minutes + ":" + seconds;

    if (totalSeconds <=0){
        document.getElementById("timerDisplay").textContent = "Time's Up!!!";
    }
}

function startTimer(){
    let minutes = parseInt(document.getElementById("minutesInput").value) || 0;
    let seconds = parseInt(document.getElementById("secondsInput").value) || 0;

    totalSeconds = (minutes * 60) + seconds;

    if (totalSeconds <= 0){
        alert("Please enter a time!");
        return;
    }
    updateDisplay();

    timerIntervalInterval = setInterval(function(){
        totalSeconds--;
        updateDisplay();

        if (totalSeconds <= 0){
            clearInterval(timerInterval);
            alert("Time's up!!!");
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(timerInterval);
}

function resetTimer(){
    clearInterval(timerInterval);
    totalSeconds = 0;
    updateDisplay();
}
updateDisplay();