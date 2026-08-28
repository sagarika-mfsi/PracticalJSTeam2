//1. Declaring Functions
//======================
function checkNumber() {
    let num = 10;

    if (num % 2 === 0) {
        //console.log("Even");
    } else {
        //console.log("Odd");
    }
}

checkNumber();

function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        //console.log(i);
    }
}

printNumbers();

//Check whether a number is prime
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));



