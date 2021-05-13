const title = document.querySelector("#title");

const BASE_COLOR = "rgb(0, 247, 255)";
const OTHER_COLOR = "#f9ca24";

function handleResize(event) {
  console.log("I have been resized");
  console.log(event);
}
//윈도우 사이즈가 변경될 때 함수가 호출된다.=>이벤트~
window.addEventListener("resize", handleResize); //handleResize() ()를 쓰게 되면 그냥 함수가 호출되니까 ()를 쓰면 안된다.

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("mouseenter", handleClick);
}

init();

function handleOnline() {
  console.log("Welcome");
}
function handleOffline() {
  console.log("byebye");
}

//MDN(html javascript dom event mdn) 보기!!: 이벤트 볼 수 있음

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
