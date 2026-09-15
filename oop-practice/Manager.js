import { Employee } from "./Employee.js";

export class Manager extends Employee {
    
    constructor(name, age, salary, employeeID, department, teamSize) { //overridden parent class constructor
        super(name, age, salary, employeeID, department);
        this.teamSize = teamSize;
    }

    display() { //overridden parent class method
        super.display();
        console.log(`Team size: ${this.teamSize}`);
    }

    calculateBonus() { //overriddedn parent class method
        return this.salary * 0.20; //not #salary beacause salary is private
        //Manager inherits the getter: get salary() {
        //return this.salary;} 
        //So Manager can safely do:this.salary
    }

}
