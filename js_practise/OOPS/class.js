//A class is a blueprint used to create objects with common properties and methods.
class classA {

}
let user1 = new classA();
let user2 = new classA();

//Constructor
/*A constructor is a special method inside a class.
It runs automatically when we create an object.*/
class classA {
    constructor() {
        console.log("i am a constructor");
    }
}
let user3 = new classA(); //i am a constructor

//Constructor with Parameters
class classA {
    constructor(name,role) {
        console.log("i am a constructor");
        this.name=name;
        this.role=role;
        console.log(this.name);
        console.log(this.role);
    }
}
let user4 = new classA("sagarika","QA");
let user5 = new classA("test","lead");
console.log(user4.name);
console.log(user5.name);

class User{
    constructor(name){
        this.name=name;
    }
    login(){
        console.log(this.name+" is logged in!!");
    }
    logout(){
        console.log(this.name+" is logged out!!");
    }
}
let userA = new User("testA");
userA.login(); userA.logout();

//Complete example of class with property and method, constructor
class LoginPage {

    constructor(username, password) {

        this.username = username;
        this.password = password;
    }

    login() {

        console.log("Username:", this.username);
        console.log("Password:", this.password);
        console.log("Login successful");
    }
}

let user = new LoginPage("admin", "admin123");

user.login();