let clockInterval;

function updateClock(){
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (hours < 0) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clockDisplay").textContent = timeString;
}


function startClock(){
    updateClock();
    clockInterval = setInterval(updateClock, 1000);
}

function stopClock(){
    clearInterval(clockInterval);
}

startClock();