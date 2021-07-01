const h1 = document.querySelector("div.hello h1");
console.log(h1);
function handleTitleClick() {
  const clickedClass = "active";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);
