const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

const BASE_COLOR = "rgb(0, 247, 255)";
const OTHER_COLOR = "#f9ca24";

function handleClick() {
  const hasClass = title.classList.contains(CLICKED_CLASS);

  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
}

function init() {
  window.addEventListener("click", handleClick);
}

init();
