//1. Object.keys()
//Returns an array containing all keys/property names of an object.

let student1 = {
    name: "Sagarika",
    age: 26,
    city: "Bhubaneswar"
};

console.log(Object.keys(student1)); //["name", "age", "city"]

//2. 2. Object.values()
//Returns an array containing all values of an object.

let student2 = {
    name: "Sagarika",
    age: 26,
    city: "Bhubaneswar"
};

console.log(Object.values(student2)); //["Sagarika", 26, "Bhubaneswar"]

//3. Object.entries()
//Returns an array containing key-value pairs.

let student3 = {
    name: "Sagarika",
    age: 26
};
console.log(Object.entries(student3));
/*[
    ["name", "Sagarika"],
    ["age", 26]
]*/
//in loops
let student4 = {
    name: "Sagarika",
    age: 26
};
for (let [key, value] of Object.entries(student4)) {
    console.log(key, value);
}

//4. Object.assign()
//Copies properties from one object to another.

let obj1 = {
    name: "Sagarika"
};
let obj2 = {
    age: 26
};
let result = Object.assign({}, obj1, obj2);
console.log(result); //{ name: "Sagarika", age: 26 }

//5. Object.create()
//Creates a new object using another object as its prototype.

let p1 = {
    greet: function() {
        console.log("Hello");
    }
};

let student = Object.create(p1);
student.greet(); //Hello

//6. Object.freeze()
//Prevents an object from being modified, we cannot add, delete, or modify properties after freezing.
let user = {
    name: "Sagarika",
    age: 26
};
Object.freeze(user);
user.age = 30;
user.name="test";
console.log(user.age); //26
console.log(user.name); //Sagarika

//7. Object.seal()
//Prevents adding or deleting properties, but existing properties can still be modified.
let user2 = {
    name: "Sagarika",
    age: 26
};

Object.seal(user2);
user2.age = 30;       // Allowed
user2.city = "BBSR";  // Not allowed
delete user2.name;    // Not allowed

console.log(user2);

//8. Object.hasOwn()
//Checks whether an object directly contains a particular property.
let user3 = {
    name: "Sagarika",
    age: 26
};

console.log(Object.hasOwn(user3, "name")); //true
console.log(Object.hasOwn(user3, "city")); //false

//9. Object.is()
//Checks whether two values are the same.
//It is similar to ===, with some differences involving values such as NaN and -0.
console.log(Object.is(10, 10)); //true
console.log(Object.is(10, "10")); //false

//10. Object.fromEntries()
//Converts key-value pairs into an object.

let entries = [
    ["name", "Sagarika"],
    ["age", 26]
];

let s1 = Object.fromEntries(entries);
console.log(s1); //{ name: "Sagarika", age: 26 }