const body = document.querySelector("body");

IMG_NUMBER = 3;

function painImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
function init() {
  const randomNumber = genRandom();
  painImage(randomNumber);
}

init();
//math.floor: 내림
//math.ceil: 올림
