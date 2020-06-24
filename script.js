const timer = document.getElementById("timer");
const button = document.getElementById("button");

let count = 1500;

let interval;

const audio = new Audio("./purge.mp3")

function start() {
  if (count < 1500) {
    clearInterval(interval);
    button.innerHTML = "Start";
  } else {
    button.innerHTML = "Stop";
    interval = setInterval(setHtml, 1000);
  }
}

function setHtml() {
  count--;
  if (count < 0) {
    button.innerHTML = "Start";
    audio.play()
    clearInterval(interval);
  } else {
    timer.innerHTML = `${Math.floor(count / 60)}:${Math.floor(count % 60)}`;
  }
}
