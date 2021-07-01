const h1 = document.querySelector("div.hello h1");
console.log(h1); /*
function handleTitleClick() {
  const clickedClass = "active";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}//class name이 있을 때, 오류 발생, 기존의 class name이 사리지고 완전 변경됨
*/

//classList.contains: html element의 class에 포함되어 있는지 말해줌
function handleTitleClick() {
  const clickedClass = "active";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}
h1.addEventListener("click", handleTitleClick);
