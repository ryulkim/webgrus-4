const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

const BASE_COLOR = "rgb(0, 247, 255)";
const OTHER_COLOR = "#f9ca24";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS); //toggle로 아까 했던 contain 작업 반복 super simple~!, toggle이 CLICKED_CLASS가 있는지 체크하고 add하거나 remove한다.
}

function init() {
  window.addEventListener("click", handleClick);
}

init();
