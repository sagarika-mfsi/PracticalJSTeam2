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