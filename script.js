"use strict";

window.addEventListener("keydown", function (e) {
  const audio = this.document.querySelector(`audio[data-key= "${e.keyCode}"]`);
  audio.currentTime = 0;
});
