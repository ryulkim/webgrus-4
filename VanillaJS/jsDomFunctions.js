const title = document.getElementById("title");
console.log(title);
console.log(document);

//document를 js 단독으로 실행할 경우 에러가 남. html을 실행하고 console로 가서 봐야함

console.error("FUck");

title.innerHTML = "HI! everyon!";

console.dir(title);
console.dir(document);
document.title = "DOM";

title.style.color = "red";

//JS로 html을 조종할 수 있음

const aaa = document.querySelector("#title"); //노드의 첫번쨰 자식을 반환
title.innerHTML = "HI";
title.style.color = "red";
