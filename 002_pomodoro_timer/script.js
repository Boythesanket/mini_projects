const timer = document.querySelector(".timer");
const shortBreakBtn = document.querySelector(".short");
const longBreakBtn = document.querySelector(".long");

console.log(timer.textContent);

function shortBreak() {
  timer.textContent = "5:00";
}

function longBreak() {
    timer.textContent = "15:00"
}