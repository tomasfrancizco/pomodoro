const timer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const clearButton = document.getElementById("clear-button");
const newTimeInput = document.getElementById("set-time-input");
const newTimeForm = document.getElementById("set-time-form")
const newTimeButton = document.getElementById("set-time-button")
const audio = new Audio("./purge.mp3");

newTimeForm.addEventListener("submit", newTimeSubmit)

let newTime = 1500;
let isPaused = false;
let interval;
let current = 0;
let count = newTime - current;

function newTimeSubmit(event){
  event.preventDefault()
  if(newTimeInput.value > 99 || newTimeInput.value < 1){
    return
  } else {
    newTime = (newTimeInput.value * 60)
  }
  newTimeInput.value = ""
  return timer.innerHTML = `${
    Math.floor(newTime / 60) < 10
      ? "0" + Math.floor(newTime / 60)
      : Math.floor(newTime / 60)
  }:${
    Math.floor(newTime % 60) < 10
      ? "0" + Math.floor(newTime % 60)
      : Math.floor(newTime % 60)
  }`;
}

function start() {
  isPaused = false;
  startButton.disabled = true;
  pauseButton.disabled = false;
  newTimeButton.disabled = true;
  interval = setInterval(() => {
    if (!isPaused && count > 0) {
      count--;
      timer.innerHTML = `${
        Math.floor(count / 60) < 10
          ? "0" + Math.floor(count / 60)
          : Math.floor(count / 60)
      }:${
        Math.floor(count % 60) < 10
          ? "0" + Math.floor(count % 60)
          : Math.floor(count % 60)
      }`;
    }
    if (count == 0) {
      audio.play();
    }
  }, 1000);
}

function pause() {
  isPaused = true;
  clearInterval(interval);
  current = count;
  startButton.disabled = false;
  pauseButton.disabled = true;
}

function clearAll() {
  clearInterval(interval);
  count = 1500;
  isPaused = false;
  timer.innerHTML = "25:00";
  startButton.disabled = false;
  pauseButton.disabled = true;
  newTimeButton.disabled = false;
}
