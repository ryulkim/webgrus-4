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
//0: true, 1: false, null: 아무것도 없음, undefined: 정의 되지 않음
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
