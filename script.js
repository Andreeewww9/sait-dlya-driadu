// script.js
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicToggle.innerText = "sound on";
  } else {
    music.play();
    musicToggle.innerText = "sound off";
  }
  isPlaying = !isPlaying;
});

// Додати сердечка
function createHearts() {
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${5 + Math.random() * 10}s`;
    document.body.appendChild(heart);
  }
}

window.onload = () => {
  createHearts();

  // Обробка кнопок переходу між секціями
  document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      document.querySelectorAll("section").forEach(sec => sec.style.display = "none");
      targetSection.style.display = "block";
    });
  });

  // Показати першу секцію при завантаженні
  const firstSection = document.querySelector("section");
  if (firstSection) firstSection.style.display = "block";
};
