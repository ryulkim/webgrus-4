const date = document.querySelector("#date");

function getDate() {
  const now = new Date();
  const christMas = new Date("2021-12-25T00:00+0900");
  const gap = christMas.getTime() - now.getTime();
  const day = String(Math.floor(gap / (1000 * 60 * 60 * 24))).padStart(2, "0");
  const hours = String(
    Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");
  const seconds = String(Math.floor((gap % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  date.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

function init() {
  getDate();
  setInterval(getDate, 1000);
}

init();
