let timer = document.querySelector(".timer");

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let mini = document.querySelector(".mini-sec");

let isRunning = false;
let miniTimer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let millIs = 0;

startBtn.addEventListener("click", () => {
    miniTimer = setInterval(() => {
    millIs++;

        if (millIs >= 100) {
        millIs = 0;
            seconds++;
        }

        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
        mini.textContent = millIs.toString().padStart(2, "0");
        second.textContent = seconds.toString().padStart(2,"0");
        minute.textContent = minutes.toString().padStart(2,"0");
        hour.textContent = hours.toString().padStart(2,"0");
      
    }, 10); 
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
});

stopBtn.addEventListener("click" , () => {
    clearInterval(miniTimer)
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = false;
})


resetBtn.addEventListener("click" , () =>{
    clearInterval(miniTimer);
    hour.textContent = "00";
    second.textContent = "00";
    minute.textContent = "00";
    mini.textContent = "00";

    startBtn.disabled = false;
    stopBtn.disabled = false;
    resetBtn.disabled = true;
})


