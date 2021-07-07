const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

//setInterval(sayHello, 1000); //5000ms=5s, 해당 시간 마다 실행
//setTimeout(sayHello, 1000); //해당 시간만큼 기다리고 실행
getClock();
setInterval(getClock, 1000);
