/*
Regex	     Meaning
-----        -------
/Login/	     contains Login
/^Login/	 starts with Login
/Login$/	 ends with Login
/\d+/	     one or more digits
/login/i	 login, case-insensitive
*/

//Regex (Regular Expression) is a pattern used to search or match text.
let email = "test@gmail.com";
console.log(/gmail/.test(email)); //true
console.log(/^gmail/.test(email)); //false
console.log(/com$/.test(email)); //true
console.log(/^gmail$/.test(email)); //false

let text = "login";
console.log(/^login$/.test(text)); //true
text = "Login successfully";
console.log(/^login$/.test(text)); //false

console.log(/Login/.test(text)); //true
console.log(/login/.test(text)); //false Login not login

console.log(/Login/.test("Please Login")); //true
console.log(/^Login/.test("Please Login")); //false
console.log(/^Login/.test("Login Now")); //true
console.log(/Login$/.test("Please Login")); //true
console.log(/^Login$/.test("Login")); //true
console.log(/^Login$/.test("Login Now")); //false

//Character Sets [ ] : A character set lets you specify which characters are allowed at a particular position.
/*
[abc]        → a OR b OR c

[0-9]        → one digit

[a-z]        → one lowercase letter

[A-Z]        → one uppercase letter

[a-zA-Z]     → one letter, upper or lower

[a-zA-Z0-9]  → one letter or digit

[^0-9]       → one character that is NOT a digit

^ inside [] → NOT but ^ -> starts with
*/

console.log(/[abc]/.test("dog")); //false

console.log(/[abc]/.test("apple")); //true

console.log(/[0-9]/.test("hello")); //false

console.log(/[0-9]/.test("hello7")); //true

console.log(/[A-Z]/.test("hello")); //false

console.log(/[A-Z]/.test("Hello")); //true

console.log(/[^0-9]/.test("123")); //false

console.log(/[^0-9]/.test("123A")); //true

/*
Quantifiers : Quantifiers tell Regex how many times something should occur.
*/