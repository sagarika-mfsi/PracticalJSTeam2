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


//7. CSS COMBINATORS
//-------------------
/*
A CSS combinator describes the relationship between elements. The main ones are:
a. Descendant
b. Child
c. Adjacent sibling
d. General sibling */

//a. Descendant Combinator
//-------------------------
/*Syntax: A B (There is a space between A and B.)

Meaning:
Find B anywhere inside A.*/

//ex: .nav-ul li div a (Find a elements anywhere inside .nav-ul. It doesn't matter whether input is directly inside .login or several levels deep.)

//b. Child Combinator
//--------------------
/*
Syntax: A > B (Find B that is a direct child of A.)
*/
//.nav-li > div 

//Descendant vs Child
//-------------------
/*
.parent .child (.child can be anywhere inside .parent.)

.parent > .child (.child must be directly inside .parent)

Space  = anywhere inside
>      = direct child

*/

//c. Adjacent Sibling
//Syntax: A + B (Find B immediately after A.)
//div+button

//WEBSITE USED: https://www.myntra.com/
//d. General Sibling
//Syntax: A ~ B : Find all B elements that come after A and share the same parent.
//div~a


//CSS ATTRIBUTE SELECTORS
//------------------------
//WEBSITE USED: https://www.myntra.com/

//1. Attribute Exists: [attribute]
//---------------------
// ex:  [draggable]

//2. Exact Attribute Value [attribute = "value"]
//-----------------------------------------------
//ex: [placeholder="Search for products, brands and more"]

//3. Attribute Starts With : [attribute^="value"]
//--------------------------------------------------
//ex: [placeholder^="Search"]

//4. Attribute Ends With : [attribute$="value"]
//-------------------------------------------------
//ex: [placeholder$="more"]

//5. Attribute Contains: [attribute*="value"]
//--------------------------------------------
//ex: [placeholder*="brands"]

//6. Attribute Contains Word : [attribute~="value"] This searches for a space-separated word.
//-------------------------------------------------
//class="image-image undefined image-hand"
//ex: [class~="image-hand"]

//7. Attribute Starts With a Prefix / Hyphen : [attribute|="value"] It matches the exact value or a value followed by a hyphen.
//-----------------------------------------------------------------
//<div lang="en"></div>
//<div lang="en-US"></div>
//[lang|="en"] //matches both
