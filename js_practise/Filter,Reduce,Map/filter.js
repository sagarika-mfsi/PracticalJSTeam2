/*filter = select
map = transform
reduce = combine
*/
//1. filter() creates a new array containing only the elements that satisfy a condition.
//filter() does NOT modify original array
let numbers = [10, 15, 20, 25, 30];
let result = numbers.filter((num) => {
    return num > 20;
});
console.log(result); //[25,30]

//Always returns an array if nothing matches [] will return
let numbers1 = [10, 20, 30];
let result1 = numbers1.filter(num => num === 20);
console.log(result1);

//With Objects
let users = [
    { name: "John", age: 25, active: true },
    { name: "Sam", age: 17, active: false },
    { name: "David", age: 30, active: true },
    { name: "Alex", age: 16, active: false }
];
let result2 = users.filter(res => res.active);
console.log(result2);
/*[
  { name: 'John', age: 25, active: true },
  { name: 'David', age: 30, active: true }
]*/

//Find users whose name is John:
let result3 = users.filter(res => res.name === "John");
console.log(result3);

//QUE:You want products that are:
/*available
price > 1000*/
let products = [
    { name: "Laptop", price: 50000, stock: true },
    { name: "Mouse", price: 500, stock: false },
    { name: "Keyboard", price: 1500, stock: true }
];
let filteredProducts = products.filter(
    val => val.stock && val.price > 1000
)
console.log(filteredProducts);

/*
Filter and find:
-----------------
filter → all matching elements
find   → first matching element*/
let colors = ["red", "orange", "blue", "green", "blue"];
let findColorBlue = colors.find(val => val === "blue");
console.log(colors.filter(val => val === "blue")); //[ 'blue', 'blue' ]
console.log(findColorBlue); //blue(1st one)

//filter() callback arguments
let res1 = colors.filter(
    (element, index, array) => {
        console.log(element, index, array);
    }
)
console.log(res1);

/*
red 0 [ 'red', 'orange', 'blue', 'green', 'blue' ]
orange 1 [ 'red', 'orange', 'blue', 'green', 'blue' ]
blue 2 [ 'red', 'orange', 'blue', 'green', 'blue' ]
green 3 [ 'red', 'orange', 'blue', 'green', 'blue' ]
blue 4 [ 'red', 'orange', 'blue', 'green', 'blue' ]
[] because we have not provide any filtered condition 
*/