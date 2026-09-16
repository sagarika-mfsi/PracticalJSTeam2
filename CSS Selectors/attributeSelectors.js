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

//WEBSITE: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
/*Combining Attribute Selectors
-------------------------------
Element : username input box
input[name="username"][class="oxd-input oxd-input--active"][autofocus]
*/