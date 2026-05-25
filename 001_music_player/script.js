import music from "./assets/music.js";

const playBtn = document.querySelector(".play-btn");

const audio = document.querySelector("audio");
const title = document.querySelector(".title h2");
const currentTime = document.querySelector(".current-time");
const duration = document.querySelector(".duration");
const progress = document.querySelector(".progress");
const web_title = document.querySelector(".web-title");

let currentSong = 0;
let isPlaying = false;

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, 0)}`;
}

audio.addEventListener("timeupdate", () => {
  progress.value = audio.currentTime;
  currentTime.textContent = formatTime(audio.currentTime);
});

audio.addEventListener("loadedmetadata", () => {
  progress.max = audio.duration;
  duration.textContent = formatTime(audio.duration);
});

progress.addEventListener("input", () => {
  audio.currentTime = progress.value;
});

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    audio.play();
    playBtn.textContent = "⏸";
    isPlaying = true;
  } else {
    audio.pause();
    playBtn.textContent = "▶";
    isPlaying = false;
  }
});

document.querySelector(".next-btn").addEventListener("click", () => {
  currentSong++;
  playBtn.textContent = "⏸";
  isPlaying = true;
  if (currentSong >= music.length) {
    currentSong = 0;
  }
  loadMusic(currentSong);
  audio.play();
});

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentSong--;
  playBtn.textContent = "⏸";
  isPlaying = true;
  if (currentSong < 0) {
    currentSong = music.length - 1;
  }
  loadMusic(currentSong);
  audio.play();
});


function loadMusic(index) {
  audio.src = music[index].src;
  title.textContent = music[index].title;
  web_title.textContent = music[index].title;
}

loadMusic(currentSong);

audio.addEventListener("ended", () => {
  currentSong++;
  playBtn.textContent = "⏸";
  isPlaying = true;
  if (currentSong >= music.length) {
    currentSong = 0;
  }
  loadMusic(currentSong);
  audio.play();
});
