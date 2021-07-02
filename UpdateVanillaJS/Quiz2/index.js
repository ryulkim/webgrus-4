const body = document.body;
function reSize() {
  const wSize = window.innerWidth;
  if (wSize >= 900) {
    body.className = "large";
  } else if (wSize <= 300) {
    body.className = "small";
  } else {
    body.className = "";
  }
}

window.addEventListener("resize", reSize);
