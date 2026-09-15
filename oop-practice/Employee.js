export class Employee {
    #salary;
    static companyName = "Mindfire Solutions";
    static employeeCount = 0;

    constructor(name, age, salary, employeeID, department) {
        this.name = name;
        this.age = age;
        this.#salary = salary;
        this.employeeID = employeeID;
        this.department = department;
        Employee.employeeCount++;
    }

    display() {

        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`EmployeeID: ${this.employeeID}`);
        console.log(`Department: ${this.department}`);
    }

    calculateBonus() {
        return this.#salary * 0.10;
    }

    get salary() {
        return this.#salary;
    }

    set salary(newSalary) {
        // your code
        if (newSalary > 0) {
            this.#salary = newSalary;
            return;
        }
        else {
        console.log("Salary must be greater than 0");
    }
    }

    static companyPolicy() {
    console.log("Employees must follow company policies.");
    }

    static getEmployeeCount(){
        return Employee.employeeCount;
    }
}
/*let emp1 = new Employee("Rahul", 25, 50000, "EMP101", "Testing");
emp1.display();
// console.log("Bonus:", emp1.calculateBonus());

emp1.salary = 60000; //emp1.salary = 60000; calls: set salary(60000)and updates:this.#salary = 60000;
emp1.salary = -5000; //doesn't update the salary.
console.log(emp1.salary); //actually calls: get salary()*/






/*
Implemented oops concept in this class:
class
constructor
properties
methods
this
encapsulation
private field
getter
setter*/

/*
Employee
   │
   ├── #salary
   │
   ├── getter
   │
   ├── setter
   │
   ├── display()
   │
   └── calculateBonus()
          ↑
          │ overridden
    ┌─────┴──────┐
    │            │
 Manager     Developer
   20%           15%
*/