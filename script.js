function abrirCarta() {
  document.querySelector(".container").classList.toggle("open");

  // 🎵 música
  document.getElementById("musica").play();

  // 🔊 sonido
  document.getElementById("openSound").play();

  // 📳 vibración (solo móvil)
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }

  lanzarParticulas();
}

/* 💗🌷✨ partículas cinematográficas */
function lanzarParticulas() {
  for (let i = 0; i < 25; i++) {
    let el = document.createElement("div");

    let tipos = ["🌷", "💗", "✨"];
    el.innerHTML = tipos[Math.floor(Math.random() * tipos.length)];

    el.style.position = "absolute";
    el.style.left = Math.random() * 100 + "vw";
    el.style.top = "60%";
    el.style.fontSize = "20px";
    el.style.animation = "flotar 6s linear";

    document.body.appendChild(el);

    setTimeout(() => el.remove(), 6000);
  }
}

/* 🌷 fondo constante elegante */
setInterval(() => {
  let el = document.createElement("span");
  let tipos = ["🌷", "💗"];
  el.innerHTML = tipos[Math.floor(Math.random() * tipos.length)];

  el.style.left = Math.random() * 100 + "vw";

  document.querySelector(".bg").appendChild(el);

  setTimeout(() => el.remove(), 15000);
}, 800);

/* ✨ estrellas */
setInterval(() => {
  let el = document.createElement("div");
  el.classList.add("sparkle");
  el.innerHTML = "✨";

  el.style.left = Math.random() * 100 + "vw";
  el.style.top = Math.random() * 100 + "vh";

  document.body.appendChild(el);

  setTimeout(() => el.remove(), 2000);
}, 300);