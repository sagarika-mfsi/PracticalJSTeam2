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

