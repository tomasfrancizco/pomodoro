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
    count = newTime - current
  }
  newTimeInput.value = ""
  return timer.innerHTML = printClock(newTime);
}

function start() {
  isPaused = false;
  startButton.disabled = true;
  pauseButton.disabled = false;
  newTimeButton.disabled = true;
  interval = setInterval(() => {
    if (!isPaused && count > 0) {
      count--;
      progress()
      timer.innerHTML = printClock(count);
    }
    if (count == 0) {
      audio.play();
    }
  }, 1000);
}

const printClock = num => {
  return `${
    Math.floor(num / 60) < 10
      ? "0" + Math.floor(num / 60)
      : Math.floor(num / 60)
  }:${
    Math.floor(num % 60) < 10
      ? "0" + Math.floor(num % 60)
      : Math.floor(num % 60)
  }`
}

function pause() {
  isPaused = true;
  clearInterval(interval);
  current = count;
  startButton.disabled = false;
  pauseButton.disabled = true;
}

function progress() {
  if(current == 0){
    current = 1;
    let bar = document.getElementById("progress-bar");
    let width = 1;
    let id = setInterval(frame, newTime * 10);
    console.log("hola desde el antes...")
    function frame() {
      if (width >= 100) {
        console.log("hola desde el if...")
        clearInterval(id);
        current = 0;
      } else {
        width++;
        console.log("hola desde el else...")
        bar.style.width = width + "%";
      }
    }
  }
}

function clearAll() {
  clearInterval(interval);
  count = 1500;
  current = 0;
  newTime = 1500;
  isPaused = false;
  timer.innerHTML = "25:00";
  startButton.disabled = false;
  pauseButton.disabled = true;
  newTimeButton.disabled = false;
}
