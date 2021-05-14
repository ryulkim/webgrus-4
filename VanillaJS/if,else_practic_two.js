const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

const BASE_COLOR = "rgb(0, 247, 255)";
const OTHER_COLOR = "#f9ca24";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS); //toggle로 아까 했던 contain 작업 반복 super simple~!
}

function init() {
  window.addEventListener("click", handleClick);
}

init();
