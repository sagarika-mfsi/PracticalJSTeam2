/*1. What is a CSS Selector?
A CSS selector is a pattern used to identify HTML elements on a webpage.
For automation, we can use CSS selectors to locate elements.*/

//WEBSITE USED: https://www.amazon.in/?utm_source=chatgpt.com

//1. ID selector (ID should ideally be unique on a page.)
//-------------------------------------------------------
/*
Element: Search box
CSS locator: #searchDropdownBox
*/


//2. Class selector
//------------------
/*
Element: amazon icon
CSS locator: .nav-logo-link
             .nav-logo-link.nav-progressive-attribute  (multiple classes)
             input.a-button-input                      (Combining Tag + Class)
*/


//3. Tag selector
//----------------------
/*
    input
    button
    a
    div
    li
*/


//4. Combining Tag + ID
//------------------------
/*
    input#twotabsearchtextbox
*/


//5.Universal Selector (Select all elements.) not recommended
//-----------------------------------------------------------
//   *


// 6. Grouping Selectors (combine multiple independent selectors using a comma.)
//------------------------------------------------------------------------------
//input, button, textarea (Find inputs OR buttons OR textareas.)


/*CSS Selector with Attribute + Class
--------------------------------------
Element : username input box
input.oxd-input[name="username"]
*/

/*CSS Selector with Parent + Attribute
---------------------------------------
Element : login button
.orangehrm-login-action button[type="submit"]
*/
