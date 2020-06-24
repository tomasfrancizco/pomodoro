const timer = document.getElementById("timer");
const button = document.getElementById("button");

let count = 1500;

let interval;

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
  console.log(count);
  if (count < 1490) {
    button.innerHTML = "Start";
    clearInterval(interval);
  } else {
    timer.innerHTML = `${Math.floor(count / 60)}:${Math.floor(count % 60)}`;
  }
}
