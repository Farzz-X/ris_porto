document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.style.display = "none";
    content.classList.remove("hidden");
  }, 1500);
});

// script.js
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  setTimeout(() => {
    loader.classList.add("hidden");
    content.classList.remove("hidden");
  }, 1500);
});

document.addEventListener("DOMContentLoaded", () => {
  const audioPlayer = document.getElementById("audioPlayer");
  const songSelector = document.getElementById("songSelector");

  songSelector.addEventListener("change", () => {
    audioPlayer.src = songSelector.value;
    audioPlayer.play(); // Tetap otomatis play saat user pilih
  });
});
