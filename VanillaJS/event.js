const title = document.querySelector("#title");

function handleResize(event) {
  console.log("I have been resized");
  console.log(event);
}
//윈도우 사이즈가 변경될 때 함수가 호출된다.=>이벤트~
window.addEventListener("resize", handleResize); //handleResize() ()를 쓰게 되면 그냥 함수가 호출되니까 ()를 쓰면 안된다.

function handleClick() {
  title.style.color = "red";
}

title.addEventListener("click", handleClick);
