function updateCountdown() {
  const now = new Date();
  const targetDate = new Date("2025-08-10T13:00:00-05:00");
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "¡Es hoy!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}
setInterval(updateCountdown, 1000);
updateCountdown();

const audio = document.getElementById("audio-player");
const btnMusica = document.getElementById("btn-musica");

btnMusica.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        btnMusica.textContent = "⏸️"; // Cambia a ícono de pausa
    } else {
        audio.pause();
        btnMusica.textContent = "▶️"; // Cambia a ícono de play
    }
});
