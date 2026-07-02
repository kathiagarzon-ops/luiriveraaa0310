function openBook() {
document.getElementById("page1").classList.remove("hidden");
document.getElementById("page2").classList.remove("hidden");
document.getElementById("page3").classList.remove("hidden");
document.getElementById("page4").classList.remove("hidden");
document.getElementById("page5").classList.remove("hidden");
}

const startDate = new Date("2025-12-31");

function updateCounter() {
const now = new Date();
const diff = now - startDate;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor(diff / (1000 * 60 * 60));

document.getElementById("counter").innerHTML =
days + " días juntos ❤️<br>" +
hours + " horas de amor 💕";
}

setInterval(updateCounter, 1000);
