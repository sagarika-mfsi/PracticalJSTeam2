/*
------------------Note:------------------
Promise have 3 stages: pending -> fullfilled / rejected
*/

let promise = new Promise((resolve, reject) => {
    let loginSuccess = true;
    if (loginSuccess) {
        resolve("Login successful");
    } else {
        reject("Login failed");
    }
});

console.log(promise); //here promise is an  object of Promise { 'Login successful' }
//to acess the value we use then

//Promise with .then(), .catch(), .finally()
let promise2 = new Promise(
    (resolve, reject) => {
        let flag = false;
        if (flag) {
            resolve("promise resolved!!");
        }
        else {
            reject("promise rejected!!");
        }
    }
)
promise2.then((val) => { console.log(val) }).catch((val) => { console.log(val) }).finally(() => console.log("END!!"));


//Promise.resolve()
let p = Promise.resolve("Hello");

p.then(result => {
    console.log(result);
});


//Promise.reject()
let p2 = Promise.reject("Something went wrong");

p2.catch(error => {
    console.log(error);
}); //Something went wrong


//Promise chaining------------------
//------------------------------------
function f1() { //here f1 function which returns one promise having one success value 10
    return new Promise(
        (resolve) => {
            resolve(10);
        }
    )
}
//console.log(f1());
f1()
    .then( //1st value i.e resolve value from top i.e 10
        (val) => {
            console.log("1st got ", val);
            return val * 2; //10 got multiplied i.e 20
        }
    )
    .then(
        (val2) => { // 20 came from 1st then
            console.log("2nd got ", val2);
            return val2 + 2; // 20 got added by 2 and sent to 3rd then
        }
    )
    .then( //here there is no next then so it will not chained further
        (val3) => {
            console.log("finally got ", val3);
        }
    )
    .catch( // if any error got occured then will caught by this catch
        (err) => console.log(err)
    )
    .finally( // as always it got executed
        () => {
            console.log("ended!!");
        }
    )

//Promise.all() :
//--------------
//waits for all Promises to succeed. If even one Promise rejects, the entire Promise.all() rejects.

let prom1 = Promise.resolve("Apple");

let prom2 = Promise.reject("Banana failed");

let prom3 = Promise.resolve("Mango");

try {
    let result = await Promise.all([prom1, prom2, prom3]);
    console.log(result);

} catch (error) {
    console.log(error);
}

/*
Promise.all()

ALL must succeed
       ↓
   Otherwise
       ↓
    REJECT*/

//Promise.race():
//------------------
//"Whichever Promise finishes first, give me its result." It doesn't care whether the first Promise is successful or failed.
/*
Promise.race()
      ↓
FIRST TO FINISH
      ↓
success OR failure*/
let myProm1 = new Promise(
    (reject) => {
        setTimeout(
            () => {
                reject("myProm1 is rejected!!")
            }, 1000
        )
    }
)
let myProm2 = new Promise(
    (resolve) => {
        setTimeout(
            () => {
                resolve("myProm2 is resolved!!")
            }, 2000
        )
    }
)

try {
    let result = await Promise.race([myProm1, myProm2]);
    console.log(result); //myProm1 will got 1st as it got settled 1st
}
catch (err) {
    console.log(err);
}


/*
race() → first one to finish wins either success or failure
any() → first one to succeed wins */