// Variables
const startStopBtn = document.querySelector(".startStopBtn");
let resetBtn = document.querySelector(".reset");

// Variables for timer
let seconds = 0;
let minutes = 0;
let hours = 0;

// Varibles for leading zeros

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for setInterval & time status
let timerInterval = null;
let timerStatus = "stoped"

//stop watch function
function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
    }

    if (minutes / 60 === 1) {
        minutes = 0;
        hours++
    }

    if(seconds < 10) {
        leadingSeconds = "0" + seconds;
    }
    else {
        leadingSeconds = seconds;
    } 

    if(minutes < 10) {
        leadingMinutes = "0" + minutes;
    }
    else {
        leadingMinutes = minutes;
    }

    if(hours < 10) {
        leadingHours = "0" + hours;
    }
    else {
        leadingHours = hours;
    }

    document.querySelector(".timer").innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// Adding event listener to startStopBtn
startStopBtn.addEventListener("click", function() {
    if(timerStatus === "stoped") {

        timerInterval = window.setInterval(stopWatch, 1000);
        document.querySelector(".startStopBtn").innerHTML = `<i class="fa-solid fa-pause" id="pause"><i>`;
        timerStatus = "started";
    }
    else {
        window.clearInterval(timerInterval);
        document.querySelector(".startStopBtn").innerHTML = `<i class="fa-solid fa-play" id="play"><i>`;
        timerStatus = "stoped";
    }
});

resetBtn.addEventListener("click", function() {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.querySelector(".timer").innerHTML = "00:00:00";
})

