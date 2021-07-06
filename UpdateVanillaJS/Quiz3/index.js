const form = document.querySelector("#randomGame");
const range = form.querySelector("#range");
const guessNumber = form.querySelector("#guess");

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min + 1;
}

function print() {
  const print = document.querySelector("#pri");
  const random = getRandomNumber(0, range.value);
  print.innerText = `You chose: ${guessNumber.value}, the machine chose: ${random}.`;
  result(random);
}

function result(random) {
  const result = document.querySelector("#res");
  if (random === parseInt(guessNumber.value)) {
    result.innerText = "You won!";
  } else {
    result.innerText = "You lost!";
  }
}

function randomGame(event) {
  event.preventDefault();
  print();
}

form.addEventListener("submit", randomGame);
