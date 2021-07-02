// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = document.querySelector("#hel");

function mouseEnter() {
  superEventHandler.innerHTML = "The mouse is here!";
  superEventHandler.style.color = colors[0];
}
function mouseLeave() {
  superEventHandler.innerHTML = "The mouse is gone!";
  superEventHandler.style.color = colors[1];
}
function rightClick() {
  superEventHandler.innerHTML = "That was a right click!";
  superEventHandler.style.color = colors[4];
}
function reSize() {
  superEventHandler.innerHTML = "You just resized!";
  superEventHandler.style.color = colors[2];
}
console.dir(superEventHandler);
window.addEventListener("contextmenu", rightClick);
superEventHandler.addEventListener("mouseenter", mouseEnter);
superEventHandler.addEventListener("mouseleave", mouseLeave);
window.addEventListener("resize", reSize);
