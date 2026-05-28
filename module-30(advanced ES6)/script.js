// const person = {
//     name : 'Shaon',
//     age : 24,
//     address : {
//         city : 'Cumilla',
//         country : 'BD'
//     }
// }

// console.log(person)
// console.log(person.address?.village)
// console.log(person.address?.country)

// const nums = [1,2,3,5,6]
// const reduceArr = nums.reduce((acc,crr)=>{
//     return acc + crr
// },0)
// console.log(reduceArr)

// class
class Player {
    #id;
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.nationality = "Bangladesh";
    this.language = "Bengali";
    this.#id = '2342'
  }
  greet(name) {
    console.log("welcome", this.name,this.#id);
  }
}

const player1 = new Player('Shaon',24);
console.log(player1);
player1.greet("Shaon");
console.log(player1 instanceof Player)

// class Animal {
//   constructor(name, color, age) {
//     this.name = name;
//     this.color = color;
//     this.age = age;
//   }
//   eating() {
//     console.log(`${this.name} is eating`);
//   }
// }
// class Dog extends Animal {
//   constructor(name, color, age) {
//     super(name, color, age);
//   }

//   brak() {
//     console.log("barking");
//   }
// }
// class Cat extends Animal {
//   constructor(name, color, age) {
//     super(name, color, age);
//   }

//   meaw() {
//     console.log("Meaw meaw");
//   }
// }

// const dog1 = new Dog("jack", "black", 5);
// const cat1 = new Cat("tom", "white", 3);
// console.log(dog1);
// dog1.eating();
// dog1.brak();
// console.log(cat1);
// cat1.eating();
// cat1.meaw();


