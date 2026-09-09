//It is used to expand/unpack the elements of an array or properties of an object.

let arr = [10, 20, 30];
console.log(...arr); //10 20 30( individual values )
console.log(arr); //[ 10, 20, 30 ](whole array)

//Copying an array into another
let fruits = ["Apple", "Mango", "Banana"];
let newFruits = [...fruits];
console.log(newFruits); //[ 'Apple', 'Mango', 'Banana' ]

//Add New Values While Copying
let newFruits2 = [...fruits, "grapes"];
let newFruits3 = ["guava", ...fruits];
console.log(newFruits2); //[ 'Apple', 'Mango', 'Banana', 'grapes' ]
console.log(newFruits3); //[ 'guava', 'Apple', 'Mango', 'Banana' ]

//Combine Two Arrays
let arr1 = [10, 20];
let arr2 = [30, 40];
let combinedArr = [...arr1, ...arr2];
console.log(combinedArr); //[ 10, 20, 30, 40 ]

//Spread with Function Arguments
let func1 = (a, b, c) => console.log(a + b + c);
let arr3 = [2, 4, 6];
func1(...arr3); //equals to func1(2,4,6)

//Spread with Strings
//Strings are iterable, so you can spread them into individual characters.
let name = "Sagarika";
console.log([...name]); //similar to name.split(""); 
/*[
  'S', 'a', 'g',
  'a', 'r', 'i',
  'k', 'a'
]*/

//Spread with Objects
let obj1 = {
    num1: 10,
    place: "math"
}
let obj2 = { ...obj1 };
console.log(obj2); //{ num1: 10, place: 'math' }

//Add Properties to an Existing Object
let obj3 = {
    num1: 10,
    place: "math"
}
let obj4 = { ...obj3, job: "QA" };
console.log(obj4); //{ num1: 10, place: 'math', job: 'QA' }

//Updating an Object Using Spread
/*{
    ...oldObject,
    property: newValue
}*/
let user = {
    name: "Sagarika",
    role: "QA",
    status: "active"
};
let updateUser = {
    ...user,
    status: "inactive"
}
console.log(updateUser);

//Combine Two Objects
let userDetails = {
    name: "Sagarika",
    role: "QA"
};

let jobDetails = {
    company: "ABC",
    experience: 3
};

let employee = { ...userDetails, ...jobDetails };
console.log(employee);

//Spread vs Assignment
let obj5 = {
    name: "Sagarika"
};
let obj6 = obj5;
console.log(obj6); //{ name: 'Sagarika' }
obj6.name = "Rahul";
console.log(obj6); //{ name: 'Rahul' }
console.log(obj5.name); //Rahul Because both variables point to the same object.

//Spread Creates a Shallow Copy, not a deep copy. for both array and objects
let user1 = {
    name: "Sagarika",
    address: {
        city: "Kolkata"
    }
};

let copy = {
    ...user1
};
console.log(copy); //{ name: 'Sagarika', address: { city: 'Kolkata' } }
copy.address.city = "Bhubaneswar";
console.log(copy); //{ name: 'Sagarika', address: { city: 'Bhubaneswar' } } here city.address refer to the same nested object.

//But
console.log(user1.address.city) //Bhubaneswar Because The top-level object is copied. But nested objects are still referenced.

//Rest Operator(Opposite of spread): collects all the arguments into an array.
function test(...numbers) {
    console.log(numbers); //[ 10, 20, 30, 40 ]
}
test(10, 20, 30, 40);

/*
Rest = collect/gather
Spread = expand/unpack
*/
//rest parameter must be the last parameter.
//function test(a, ...rest) {}   // correct
//function test(...rest, a) {}   //wrong