"use strict";
const input = document.querySelector(".inp");
input.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key= "${e.keyCode}"]`);
  audio.currentTime = 0;
  if (!audio) return;
  audio.play();
});
