const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginSubmit(event) {
  event.preventDefault(); //기본 동작을 하지 못하도록 함=>페이지 새로고침을 막음
  console.log(loginInput.value);
}
loginForm.addEventListener("submit", onLoginSubmit);
