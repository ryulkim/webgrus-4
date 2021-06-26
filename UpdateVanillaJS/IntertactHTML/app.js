//document
document.title = "Hello! From Js!";

//id 검색
const title = document.getElementById("title");
console.log(title);
console.dir(title);
title.innerText = "1234";
//querySelector
const queryid = document.querySelector("#title");
console.log(queryid);

//class 검색
const className = document.getElementsByClassName("hello");
console.dir(className);
className[0].innerText = "1231231";

//querySelector: css 방식으로 검색
let query = document.querySelector(".hello h1"); //첫번째 것만 가져온다
console.log(query);
query = document.querySelector("div.hello h1:first-child");
console.log(query);
query = document.querySelector("div.hello h1:nth-child(2)");
console.log(query);
query = document.querySelector("div.hello h1:nth-child(3)");
console.log(query);
query = document.querySelector("div.hello h1:last-child");
console.log(query);
query.innerText = 33333333333333;

//querySelectorAll: 조건에 해당하는 모두를 가져옴
const queryAll = document.querySelectorAll(".hello h1");
console.log(queryAll);
queryAll[1].innerText = 125678940;

console.dir(query);
query.style.color = "blue";

console.dir(queryAll[1]);
console.dir(queryAll);

//Event, h1 html element mdn 검색
function handleClick() {
  query.style.color = "green";
}
function mouseEnter() {
  query.style.color = "red";
  console.log("mooooooooooooooooooouseeeeeeeeeee");
}
function mouseLeave() {
  query.style.color = "blue";
}
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
  alert("copier!");
}

query.addEventListener("click", handleClick); //=query.onclick=handleClick;
query.addEventListener("mouseenter", mouseEnter); //=query.onmouseenter=mouseEnter;
query.addEventListener("mouseleave", mouseLeave);

//window
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
