const timer = document.getElementById("timer");
const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const clearButton = document.getElementById("clear-button");

let count = 1500;
let isPaused = false;
let interval;

const audio = new Audio("./purge.mp3");


function start() {
  isPaused = false;
  startButton.disabled = true;
  pauseButton.disabled = false;
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
  }, 1000);
}

function pause() {
  isPaused = true;
  startButton.disabled = false;
  pauseButton.disabled = true;
}

function clearAll() {
  clearInterval(interval);
  count = 1500;
  isPaused = false;
  timer.innerHTML = "25:00"
  startButton.disabled = false;
  pauseButton.disabled = true;
}