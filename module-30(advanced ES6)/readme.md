1. access value
   1. dot notation
   2. bracket notation
2. nested Object
3. optional chaining (?)
4. map
   array.map((element,index,array)=>{console.log(element)})
5. find
   array.find((element,index,array)=>{console.log(element)})
   return first element
6. filter
   array.filter((element,index,array)=>{console.log(element)})
7. forEach
   array.forEach((element,index,array)=>{console.log(element)})

8. class (class is method to create object . it is the method used for create object where multiple object properties are same and keeping the same properties for multiple object just declare for one time . in class we have 2 method  constructor and class method . constructor used for create object properties and class method used for create object method. to create object we use this keyword.properties name and we receive properties value like parameter and we pass the value when we create new object and call the class and this keyword only available inside class . class method use to do somethings when the class method call. instanceof to check the object created from the class or not)

    class Player {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.nationality = "Bangladesh";
            this.language = "Bengali";
        }
        greet(name) {
            console.log("welcome", name);
        }
    }

    const player1 = new Player('Shaon',24);
    console.log(player1);
    player1.greet("Shaon");
    console.log(player1 instanceof Player)

9. inheritance and prototype inheritance : 
(here when we make a object from class it is like inheritance but when we make multiple object form a class and the object few props and method are same and some props and method are not same then we create another class called parent class and the main class borrow the common thing to create an object from the parent class this call prototype chain / inheritance . like if the object class don't have the props or method go find to parent . the object class extends to parent class and use super method to create props in child class . just call super(props name) and use props name for method doesn't need to call by super)

        class Animal {
          constructor(name, color, age) {
            this.name = name;
            this.color = color;
            this.age = age;
          }
          eating() {
            console.log(`${this.name} is eating`);
          }
        }
        class Dog extends Animal {
          constructor(name, color, age) {
            super(name, color, age);
          }

          brak() {
            console.log("barking");
          }
        }
        class Cat extends Animal {
          constructor(name, color, age) {
            super(name, color, age);
          }

          meaw() {
            console.log("Meaw meaw");
          }
        }

        const dog1 = new Dog("jack", "black", 5);
        const cat1 = new Cat("tom", "white", 3);
        console.log(dog1);
        dog1.eating();
        dog1.brak();
        console.log(cat1);
        cat1.eating();
        cat1.meaw();

10. encapsulation (some thing secret just available in class)
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

11. this keyword : 
    1. inside object method is means the whole object 
    2. but if the method declare by arrow function then this will return empty object (arrow function don't have its own this)
    3. in browser this means whole window object 
    4. in event this means the event 