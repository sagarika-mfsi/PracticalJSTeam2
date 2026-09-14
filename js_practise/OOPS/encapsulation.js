/*
Encapsulation means:
Combining data and methods together and controlling access to the data.*/

class BankAccount {

    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    showBalance() {
        console.log(this.balance);
    }
}

//Private Properties
class BankAccount {

    #balance = 1000; //private

    showBalance() {
        console.log(this.#balance);
    }
}

let account = new BankAccount();

account.showBalance();

//console.log(account.#balance); error as balance is private, It can only be accessed inside the class.

//Private Method
class Login {

    #validateCredentials() {
        console.log("Credentials validated");
    }

    login() {

        this.#validateCredentials();
        console.log("Login successful");
    }
}

let login = new Login();

login.login();
//login.#validateCredentials(); error

//Getters : A getter allows us to access a method like a property.
class Employee {

    constructor(name) {
        this.name = name;
    }
    get employeeName() {
        return this.name;
    }
}

let emp = new Employee("Sagarika");
console.log(emp.employeeName);
console.log(emp.employeeName());//error

//Setters : A setter allows us to modify a property through controlled logic.
class Employee {

    constructor(name) {
        this.name = name;
    }

    set employeeName(newName) {
        this.name = newName;
    }
}

let emp1 = new Employee("Sagarika");

emp1.employeeName = "Rahul";

console.log(emp1.name);

//Ex: complete getter + setter
class Employee {

    constructor(name) {
        this.name = name;
    }

    get employeeName() {
        return this.name;
    }

    set employeeName(newName) {

        if (newName.length < 3) {
            console.log("Name is too short");
            return;
        }
        this.name = newName;
    }
}

let emp2 = new Employee("Sagarika");

console.log(emp2.employeeName); //Sagarika JavaScript sees you're reading employeeName, so it calls: get employeeName()

emp2.employeeName = "Ra"; // Name is too short 
//JavaScript sees you're assigning/changing employeeName, so it calls: set employeeName(newName)

console.log(emp2.employeeName); //Sagarika  because updating value is not set //again calling getter get employeeName() 