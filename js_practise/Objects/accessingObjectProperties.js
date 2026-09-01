//1. Dot Notation .: Used when the property name is a valid JavaScript identifier.

let student = {
    name: "Sagarika",
    age: 26,
    city: "Bhubaneswar"
};
console.log(student.name); //Sagarika
console.log(student.age); //26
console.log(student.city); //Bhubaneswar

//2. Bracket Notation [] : The property name is written inside square brackets.

let student2 = {
    name: "Sagarika",
    age: 26,
    city: "Bhubaneswar"
};

console.log(student2["name"]); //Sagarika
console.log(student2["age"]); //26
console.log(student2["city"]); //Bhubaneswar

//3. Dynamic Property Access : Bracket notation is especially useful when the property name is stored in a variable:

let student3 = {
    name: "Sagarika",
    age: 26,
    city: "Bhubaneswar"
};
let property = "name";
console.log(student3[property]); //Sagarika

//4. Nested Object

let student4 = {
    name: "Sagarika",
    address: {
        city: "Bhubaneswar",
        state: "Odisha"
    }
};

console.log(student4.address.city); //Bhubaneswar
console.log(student4["address"]["state"]); //Odisha





