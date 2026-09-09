/*
reduce() takes all array elements and reduces them to a single final value.
That final value could be:
number
string
object
array
*/
let numbers = [2, 3, 4];
let total = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);
console.log(total); //100

//Product
let product = numbers.reduce((val, num) => {
    return val * num;
}, 1);
console.log(product);

//Find maximum
let numbers1 = [10, 50, 20, 80, 30];

let max = numbers1.reduce((max, num) => {
    return num > max ? num : max;
}, numbers1[0]);

console.log(max);

//Filter + map + reduce
let products = [
    { name: "Laptop", price: 50000, available: true },
    { name: "Mouse", price: 500, available: false },
    { name: "Keyboard", price: 1500, available: true },
    { name: "Monitor", price: 10000, available: true }
];
//Find available products, get their prices, and calculate total.
let filteredProducts = products.filter(val => val.available);
//console.log(filteredProducts);
let pricesOfFilteredProducts = filteredProducts.map(val => val.price);
//console.log(pricesOfFilteredProducts);
let totalPrice = pricesOfFilteredProducts.reduce((acc, red) => acc + red, 0);
console.log(totalPrice);

//Using chaining all 3 methods
let totalPrice1 = products
    .filter(val => val.available)
    .map(val => val.price)
    .reduce((acc, red) => acc + red, 0);
console.log(totalPrice1);

//reduce() has:(accumulator, currentValue, currentIndex, array)
let myNum = [10, 20, 30];
let result = myNum.reduce((acc, current, index, arr) => {

    console.log(acc);
    console.log(current);
    console.log(index);
    console.log(arr);

    return acc + current;

}, 0);
console.log(result);


