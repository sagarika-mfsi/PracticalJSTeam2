//An iterator is an object that allows you to access elements one at a time.
//An iterator has a next() method.
let browsers = ["Chrome", "Firefox", "Edge"];

for (let browser of browsers) {
    console.log(browser);
}

//Internally
let iterator = browsers[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*
Iterable
   ↓
Symbol.iterator()
   ↓
Iterator
   ↓
next()
   ↓
{ value, done }*/

let arr = [10, 20, 30];

let iterator1 = arr[Symbol.iterator]();

console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

//Custom iterator
let numbers = {

    [Symbol.iterator]() {

        let num = 1;

        return {
            next() {

                if (num <= 3) {
                    return {
                        value: num++,
                        done: false
                    };
                }

                return {
                    value: undefined,
                    done: true
                };
            }
        };
    }
};

let iterator2 = numbers[Symbol.iterator]();

console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());
console.log(iterator2.next());