if (10 === "10") {
  console.log("hi");
} else if ("10" === "10") {
  console.log("lalalalal");
} else {
  console.log("ho");
}

if (20 > 5 && "nicolas" === "nicolas") {
  //&&와 ||
  console.log("yes");
} else {
  console.log("no");
}

const age = prompt("How old are you"); //유저에게 뭘 물어볼 수 있는 기능, 아주 오래됨
console.log(age);

if (age > 18 && age < 21) {
  console.log("you can drink but you should not");
} else if (age > 21) {
  console.log("go ahead");
} else {
  console.log("too young");
}
