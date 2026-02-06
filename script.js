const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const emoji = document.getElementById("emoji");
const main = document.getElementById("main");

let emojiSize = 40;
const isMobile = window.matchMedia("(pointer: coarse)").matches;

/* DESKTOP → No runs away */
if (!isMobile) {
  noBtn.addEventListener("mouseover", moveBtn);
}

/* MOBILE → angry emoji */
else {
  noBtn.addEventListener("click", angry);
}

function moveBtn() {
  const overlay = document.querySelector(".overlay");
  const rect = overlay.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  noBtn.style.position = "absolute";

  const maxX = rect.width - btnRect.width - 20;
  const maxY = rect.height - btnRect.height - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

function angry() {
  emoji.style.display = "block";
  emojiSize += 20;
  emoji.style.fontSize = emojiSize + "px";
}

/* YES CLICK */
yesBtn.onclick = () => {
  main.innerHTML = "<h1>YAYY Heheh 💖🥰</h1>";
  confetti();
  hearts();
};

/* CONFETTI */
function confetti() {
  for (let i = 0; i < 120; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = randomColor();
    c.style.animationDuration = (2 + Math.random() * 2) + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

function randomColor() {
  const colors = ["#ff4d88", "#ffd700", "#00e5ff", "#8aff65", "#ff8c00"];
  return colors[Math.floor(Math.random() * colors.length)];
}

/* HEARTS */
function hearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = (20 + Math.random() * 30) + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 5000);
  }, 300);
}

