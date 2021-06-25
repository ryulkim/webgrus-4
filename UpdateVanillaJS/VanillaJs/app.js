console.log("asdfasdf");
console.log(123123);

console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);

// 변수
//const: 바뀌지 않는 값
//JS에서는 변수 이름의 공백을 대분자로 바꿈 ex) myName
//파이썬 방식: 공백을 _로 함, ex) my_name
const a = 7;
const b = 2;
let myName = "ryula";

console.log(a + b);
console.log(a * b);
console.log(a / b);

console.log("Hello,", myName);
console.log("Hello, " + myName);

myName = "RyulA";
console.log("Hello, " + myName);

//boolean
//0: true, 1: false, null: 아무것도 없음, undefined: 정의 되지 않음 NaN: Not a Number, 숫자가 아님
//null은 값이 없다는걸 확실하게 표현, 의도적으로 표현
//undefined는 variable이 존재하는데 값이 할당이 안된것
const amIFat = false;
let somthing;
console.log(amIFat);
console.log(somthing);

//array
const nonsense = [1, 2, "hello", false, true];
console.log(nonsense);
//Get Item from Array
console.log(nonsense[2]);
//Add one more day to the array
nonsense.push("ddddd");
console.log(nonsense);

//object
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
player.name = "ryula";
console.log(player["name"]);
//player = false; //error
player.lastName = "mash"; //추가됨
console.log(player);

//function
function sayHello(nameOfPerson) {
  console.log("Hello,", nameOfPerson);
}

sayHello("Ryula");
sayHello("aaaa");

function plus(a, b) {
  console.log(a + b);
}
function divide(a, b) {
  console.log(a / b);
}
plus(4, 5);
divide(9, 2);

const Player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log(this.name + ":", "hello!", otherPersonsName);
  },
};

console.log(Player.name);
Player.sayHello("Ryula");

//HW
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const pluseResult = calculator.add(1, 2);
const minusResult = calculator.minus(1, pluseResult);
const divideResult = calculator.divide(minusResult, 2);
const powerResult = calculator.power(divideResult, 2);

console.log(pluseResult);
console.log(minusResult);
console.log(divideResult);
console.log(powerResult);

let age = 96;
function calculatorKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

const KrAge = calculatorKrAge(age);

console.log(KrAge);

//prompt: 사용자에게 창을 띄울 수 있도록 함, 오래된 방법, 보동 브라우저가 지원하는 창을 씀, type은 string으로
//parseInt: 타입을 int로 바꿔주는 법
age = parseInt(prompt("How old are you?"));
console.log(age);
console.log(typeof age); //typeof: 타입을 알려줌
console.log(isNaN(age)); //isNaN: 숫자가 아니면 true, 숫자면 false

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
  prom = parseInt(prompt("How old are you?"));
} else if (age < 18) {
  console.log("You are too young");
} else if (age < 45) {
  console.log("You can drink");
} else {
  console.log("Hmm....You should consider your health");
}

//document
document.title = "Hello! From Js!";
