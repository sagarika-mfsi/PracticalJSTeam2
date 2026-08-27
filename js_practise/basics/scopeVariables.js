//console.log(a); //reference error
//console.log(b); //reference error
console.log(s1); // undefined
let a =5;
const b ="test";
var s1 ="i am a variable";
//console.log(a); 
//console.log(b); 
console.log(s1);

function test() {
  var a = 10;
  let b = 20;
  {
    var a = 30;
    let b = 40;
    console.log(a, b); 
  }
  console.log(a, b);
}
test();
