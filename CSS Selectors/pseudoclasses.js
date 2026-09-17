/* WEBSITE USED: https://www.bigbasket.com/
CSS Pseudo-Classes : A pseudo-class describes a special state or position of an element.
------------------

a. :first-of-type : Select the first element of that particular type among its siblings.
=================
Syntax: element:first-of-type
ELEMENT: Header delivery in 10 mins button
ex: .sc-jdkBTo:first-of-type-------??????? 

note:
:first-child - first child regardless of tag
:first-of-type - first element of that particular tag

b. :last-of-type : Select the last element of that particular type among its siblings.
================
Syntax: element:first-of-type
ELEMENT: Header delivery in 10 mins button
ex: .dzJGGS:last-of-type

c. :nth-of-type :
================
WEBSITE: https://www.hyperpure.com/ind/bhubaneswar
ELEMENT: OUR CATEGORIES CARDS( a tags)
a:nth-of-type(2)
a:nth-of-type(odd)
a:nth-of-type(even)
a:nth-of-type(3n)
a:nth-of-type(3n+1)

d. nth-child(no)
=================
a:nth-child(2)

NOTE: 
nth-child() counts all element types.
nth-of-type() counts only that element type.
*/

//nth-child vs nth-of-type