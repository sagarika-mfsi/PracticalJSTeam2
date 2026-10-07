/*
****************** id ************************
#id 
tagname#id 
tagname[id='value']
*/
//WEBSITE USED: https://www.ebay.com/
//Element used: Searchbox
// #gh-ac
// input#gh-ac
// input[id="gh-ac"]

/*
******************class **********************
.class
tagname.class
tagname[class='value']

.class.class.class - If spaces 
*/
//ELEMENT USED: Search button at top right
// .gh-search-button__label
// span.gh-search-button__label
// span[class="gh-search-button__label"]

//Search button div
//.gh-search-button__wrap.visual-search-enabled

/*
************** for all attributes******************

tagname[attribute='value']
tagname[attribute]
[attribute='value']
tagname:not([attribute='value'])

for multiple attributes - 
tagname [attribute='value'][attribute='value']
or input#twotabsearchtextbox[placeholder^='Search']
*/
// Element: Search bar
// input[placeholder="Search for anything"]
// input[placeholder]
// [placeholder="Search for anything"]
// input:not([class="ui-autocomplete-input"])
// div.gh-nav__right-wrap>div:not([class="gh-flyout"])???

// input[id="gh-ac"][placeholder="Search for anything"]
// input#gh-ac[type="text"][placeholder="Search for anything"]

/*
class - abc123 abc234 abc6995
partial locate 
tagname[attribute ^= 'value']
tagname [a*='v']
t[a$='v']
*/
// top elements
// a[_sp^="m570.l"]
//sell dropdown at top left
//a[_sp$="l1528"]
//Searchbar dropdown
//select[aria-label*="category for"]


/*
parent to child - parent child child child 
child to parent - parent>child 
following sibling of same parent - label[for='twotabsearchtextbox']+input
following sibling of diff parent - label[for='twotabsearchtextbox']~input


Indexing - 
tagname[attribute='value']:nth-child(index)
input[class*='input']:nth-child(2)
first-child, last-child 
*/

// WEBSITE: https://www.zoho.com/mail/
// ELEMENT: header elements

//.zw-global-header+div
//.uheader~div
// .zwc-relatedPrd-wrap li
// .menu li
// .zwc-relatedPrd-wrap>li
// .zwc-relatedPrd-wrap>li:nth-of-type(3)
// .zwc-relatedPrd-wrap li:nth-child(3)
// .zgh-nav li:last-child
// .zgh-nav li:first-child

//EXAMPLE----PRACTISE
