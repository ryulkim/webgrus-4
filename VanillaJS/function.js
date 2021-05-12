//Function: 원하는 만큼 쓸 수 있는 코드
//인자(argument)=파라미터
//string: '',""
//``(백틱): 변수를 쓰며 포맷 형식을 바꿀 수 있음..?

function sayHello(name, num) {
  console.log("Hello!", name + "!!!", "your number is", num);
  console.log(`Hello ${name}!! your number is ${num}!`);

  return `Hello ${name}~!! your number is ${num}!`;
}

sayHello("Ryula", 15);
console.log("hi");

const greetRyula = sayHello("Ryula", 21);

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
};

console.log(greetRyula);
const plus = calculator.plus(5, 5);
console.log(plus);
console.log(calculator);
console.log(console);
