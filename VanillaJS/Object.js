//Object는 value를 결정할 수 있다
const ryulaInfo = {
  name: "Ryula", //','빼먹지 말기!! String 사용할 때 "" 빼먹지 말기!!
  age: 21,
  gender: "Women",
  isNice: true,
  favMovies: ["Along the gods", "LOTR", "Oldboy"],
  favFood: [
    { name: "TTockbokki", taste: "spicy" },
    { name: "Kimchi", taste: "sour" },
  ],
};

console.log(ryulaInfo);
console.log(ryulaInfo.gender);

ryulaInfo.age = 20;

console.log(ryulaInfo.age);
console.log(ryulaInfo.favFood);
console.log(ryulaInfo.favFood[0].name);
