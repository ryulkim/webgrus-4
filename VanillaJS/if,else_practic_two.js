const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

const BASE_COLOR = "rgb(0, 247, 255)";
const OTHER_COLOR = "#f9ca24";

function handleClick() {
  const currentClass = title.className;
  if (currentClass !== CLICKED_CLASS) {
    title.className = CLICKED_CLASS;
  } else {
    title.className = "btn";
  }
}

function init() {
  window.addEventListener("click", handleClick);
}

init();
