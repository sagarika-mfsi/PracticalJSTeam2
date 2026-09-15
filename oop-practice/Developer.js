import { Employee } from "./Employee.js";
export class Developer extends Employee {
    /*
    When a child class has no constructor, JavaScript effectively provides a default constructor that passes the arguments to the parent.
    Conceptually:
    constructor(...args) {
    super(...args);
    }*/

    calculateBonus() { //overridden parent class method
        return this.salary * 0.15;
    }
}