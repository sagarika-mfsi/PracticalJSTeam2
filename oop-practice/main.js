import { Employee } from "./Employee.js";
import { Manager } from "./Manager.js";
import { Developer } from "./Developer.js";

//Employee class object
let emp1 = new Employee("Employee1", 25, 50000, "EMP101","Testing");

//Manager class object
let manager1 = new Manager("Manager1", 35, 100000,"MGR101", "Testing", 5);

//Developer class Object
let developer1 = new Developer("Developer1", 27, 80000, "DEV101", "Development");

console.log("----- EMPLOYEE -----");
emp1.display();
console.log("Employee Bonus:", emp1.calculateBonus());
console.log(Employee.companyName);
console.log(Employee.companyPolicy());
console.log("----------------");


console.log("----- MANAGER -----");
manager1.display();
console.log("Manager Bonus:", manager1.calculateBonus());
console.log("----------------");

console.log("----- DEVELOPER -----");
developer1.display();
console.log("Manager Bonus:", developer1.calculateBonus());
console.log("----------------");

console.log(Employee.getEmployeeCount());

console.log("----- INSTANCEOF -----");
/*
instanceof
instanceof checks whether an object is an instance of a particular class or its inheritance chain..*/
console.log(emp1 instanceof Employee);
console.log(emp1 instanceof Manager);
console.log(emp1 instanceof Developer);

console.log(manager1 instanceof Employee);
console.log(manager1 instanceof Manager);
console.log(manager1 instanceof Developer);

console.log(developer1 instanceof Employee);
console.log(developer1 instanceof Manager);
console.log(developer1 instanceof Developer);


/*Note:
Named Export	                    Default Export 
-----------                         --------------
export class Employee           	export default Employee
import { Employee }	                import Employee
{} required	                        {} not required
Multiple allowed                	One default per module
*/