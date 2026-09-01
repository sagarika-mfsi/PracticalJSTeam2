//1. Object Literal
const person = {
  name: "sagarika",
  age: 26,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

console.log(person.name); // sagarika
person.greet(); // Hello, I'm sagarika

//2. Using the new Object() Constructor
const person2 = new Object();
person2.name = "Sagarika";
person2.age = 26;
person2.greet = function () {
  console.log(`Hello, I'm ${this.name}`);
};
console.log(person2);

//3. Using a Constructor Function
//Before ES6, this was a common way to create multiple similar objects.
function Person3(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hello, I'm ${this.name}`);
  };
}
const person4 = new Person3("sagarika", 26);
const person5 = new Person3("test", 30);
person5.greet(); //Hello, I'm test

//4. Using ES6 Classes (Recommended for Blueprints)
class P {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
const p1 = new P("sagarika", 26);
p1.greet();

//5. Using Object.create()
const personPrototype = {
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
};

const p = Object.create(personPrototype);

p.name = "sagarika";
p.age = 25;
p.greet();

//5. Factory Function : A function that returns a new object.
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`Hello, I'm ${name}`);
    }
  };
}
const t1 = createPerson("sagarika", 25);
t1.greet();