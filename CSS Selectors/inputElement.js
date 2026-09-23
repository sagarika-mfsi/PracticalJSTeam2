//input tag
//WEBSITE USED: https://www.facebook.com/
// input[id="_R_1h6kqsqppb6amH1_"]
// input[type="password"] //password field //email address/mobile number field
// input[name="email"]
// input[name^="ema"]
// input[name$="mail"]
// input#_R_1h6kqsqppb6amH1_
// div input#_R_1h6kqsqppb6amH1_

//user input using string literal
let myVal = "test";
page.locator(`#${myVal}`).fill("Sagarika");

let buttonName = "login-button";
page.locator(`[data-testid="${buttonName}"]`).click();


//Dynamic values----

let name = "Sagarika";

page.getByText(name);                  // direct variable
page.getByText(`Hello ${name}`);       // template literal
page.locator(`#${name}`);              // dynamic CSS selector
(`.${className}`)
page.locator(`//button[text()="${name}"]`); // dynamic XPath
getByRole("button", { name: buttonName })   //getByrole

