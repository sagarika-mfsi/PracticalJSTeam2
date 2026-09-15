//One class can acquire properties and methods from another class.
class Employee { // Parent class / Superclass
    data = "test";
    constructor(name) {
        this.name = name;
    }
    work() {
        console.log("Employee is working");
    }
}
class QA extends Employee { //Child class / Subclass

    test() {
        console.log("QA is testing");
    }
}

let QA1 = new QA();
QA1.work();

//super keyword : super is used to access the parent class.
class Intern extends Employee {
    display() {
        console.log(this.data); //as data is instantce variable
        super.work(); //calling super class method
    }

}
let intern1 = new Intern();
intern1.display();

class testA {
    constructor(a, b) {
        console.log("this is super class constructor", a + b);
    }
}
class testB extends testA {
    /*constructor(){
        super(); //must call super class constructor if child class has its own constructor before using this
        console.log("this is child class constructor");
    }*/

    display() {
        console.log("hello");
    }

}
let ctestB = new testB(2, 3); //here the args went inside parent class constructor i.e bydefault constructor added by js in child class and inside that super();