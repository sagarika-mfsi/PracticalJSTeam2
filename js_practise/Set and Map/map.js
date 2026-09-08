//object as key
//A Map is a collection of key-value pairs where keys can be of any data type.
//Creating Map
let map1 = new Map();
console.log(map1); //Map(0) {} empty map

//Map with values
map1 = new Map([
    ["name", "John"],
    ["age", 25],
    ["city", "Delhi"]
]);

console.log(map1); //Map(3) { 'name' => 'John', 'age' => 25, 'city' => 'Delhi' }

//Map methods:----------
//1. Set()
let map2 = new Map();
map2.set("fruit1", "apple");
map2.set("fruit1", "banana");//here banana will get override with apple as the key is same for both values
map2.set("Age", 26);
map2.set("Boolean", true);
console.log(map2); //Map(3) { 'fruit1' => 'banana', 'Age' => 26, 'Boolean' => true }

//size
console.log(map2.size); //3

//Updating a value
map2.set("fruit1", "mango");
console.log(map2); //Map(3) { 'fruit1' => 'mango', 'Age' => 26, 'Boolean' => true }

//get(): Retrieves the value for a key.
console.log(map2.get("fruit1")); //mango
console.log(map2.get(123)); //undefined if key doesn't exists

//has() Checks whether a key exists.
console.log(map2.has("age")); //false

//delete() Deletes a key-value pair.
map2.delete("Age");
console.log(map2); //Map(2) { 'fruit1' => 'mango', 'Boolean' => true }

//clear(): it will empty the map
map2.clear();
console.log(map2); //Map(0) {}

//Map can have any data type of key
//Array key
let arr1 = [10, 20, 30];
let map3 = new Map();
map3.set(arr1, "array type of key contains string value");
console.log(map3); //Map(1) { [ 10, 20, 30 ] => 'array type of key contains string value' }
//here my key is array and its value is a string

//Object key
let myObj = {
    name: "test"
}
map3.set(myObj, "i am value for this object key");
console.log(map3); /*Map(2) {
                    [ 10, 20, 30 ] => 'array type of key contains string value',
                    { name: 'test' } => 'i am value for this object key'
                    }
                    */

//Iterating Map for (let [key, value] of map)
let map4 = new Map([
    ["name", "John"],
    ["age", 25],
    ["city", "Delhi"]
]);
for (let [k, v] of map4) {
    console.log(k, v);
}
//using for each : here it will iterate value and key not key and value
map4.forEach(
    (v, k) => console.log(k, v)
)

//keys(), values(): Returns iterator pairs., entries(): Returns key-value pairs.
let map5 = new Map(
    [
        ["num1", 10],
        ["num2", 20],
        ["num3", 30]
    ]
);
console.log(map5.keys()); //[Map Iterator] { 'num1', 'num2', 'num3' } so use in for of to iterate over keys
console.log(map5.values()); //[Map Iterator] { 10, 20, 30 } so use in for of to iterate over values
console.log(map5.entries()); //[Map Entries] { [ 'num1', 10 ], [ 'num2', 20 ], [ 'num3', 30 ] }

//Converting Object → Map
let user = {
    name: "John",
    age: 25
};
let map6 = new Map(Object.entries(user));
console.log(map6);