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
/*function handleTitleClick() {
  const clickedClass = "active";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}*/
//toggle: class name이 존재하는지 확인, class name이 존재한다면 삭제, 존재 안하면 추가
function handleTitleClick() {
  h1.classList.toggle("active");
}
h1.addEventListener("click", handleTitleClick);
