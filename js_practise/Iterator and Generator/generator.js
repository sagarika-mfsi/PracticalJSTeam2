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

//add 2-3 more examples using array, function
