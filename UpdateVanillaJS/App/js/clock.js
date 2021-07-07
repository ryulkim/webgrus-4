const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //padStart: 글자수에 맞지 않으면 글자수에 맞게 두번째 argument의 값을 앞에다 붙여준다.
  //String(): 숫자를 문자로 변환한다.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

//setInterval(sayHello, 1000); //5000ms=5s, 해당 시간 마다 실행
//setTimeout(sayHello, 1000); //해당 시간만큼 기다리고 실행
getClock();
setInterval(getClock, 1000);
