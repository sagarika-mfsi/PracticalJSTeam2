//Generator = an easy way to create an iterator.
//A generator is a special function that can pause and resume execution.
//It is written using: function*
//yield pauses the generator.

function* test() {

    console.log("A");

    yield 10;

    console.log("B");

    yield 20;

    console.log("C");

    yield 30;
}

let gen = test();

console.log("Starting");

console.log(gen.next()); //Continue the generator until the next yield.

console.log("Middle");

console.log(gen.next());

console.log("End");

//ex:2
function* testUsers() {

    yield {
        username: "user1",
        password: "pass1"
    };

    yield {
        username: "user2",
        password: "pass2"
    };

    yield {
        username: "user3",
        password: "pass3"
    };
}

let users = testUsers();

console.log(users.next().value);
console.log(users.next().value);
console.log(users.next().value);

//Generator with a loop
function* numbers() {
    for (let i = 1; i <= 3; i++) {
        yield i;
    }

}
let gen1 = numbers();
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());
console.log(gen1.next());

//Using for...of
function* numbers() {
    yield 10;
    yield 20;
    yield 30;
}

for (let value of numbers()) {
    console.log(value);
}

//Generator returning a value
function* test() {

    yield 10;
    yield 20;

    return 30;  //means finish the generator and give 30.
}

let gen2 = test();

console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());

//Generator with a parameter: pass a value into a generator using .next(value).
function* test() {

    let name = yield "Enter your name";

    console.log("Hello " + name);
}
let gen3 = test();

console.log(gen3.next());

console.log(gen3.next("Sagarika"));

//generator using array
function* getBrowsers() {

    let browsers = ["Chrome", "Firefox", "Edge"];

    for (let browser of browsers) {
        yield browser;
    }
}

let result = getBrowsers();

console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);