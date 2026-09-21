/*Locator	                Used for
-----------                ------------
getByRole()	                Buttons, links, checkboxes, headings, textboxes, etc.
getByLabel()	            Input fields associated with labels
getByPlaceholder()	        Input fields using placeholder
getByText()	                Visible text
getByAltText()	            Images with alt text
getByTitle()	            Elements with title
getByTestId()	            Explicit test IDs
*/
//WEBSITE USED: https://dequeuniversity.com/demo/dream

//Element: From text box
getByLabel("From station")

//Element: Form Search button
getByRole("button",{name:' Search'})

//Element: Logo
getByAltText("Dream Destination logo")

//Element: Search box of Discover icon(top right)
getByPlaceholder("Explore our expert content")

//-------------------------------------------------------

//WEBSITE USED: https://dequeuniversity.com/demo/
//Element: header option
getByRole("menuitem",{name:'Instructor-Led Training'}); 

//Element: Top right language
getByText("English");

//Element : page title
getByTitle("Demo Sites")


//WEBISTE USED: https://www.qapractice.com/practice-login-form
//Element: Email address text box
getByTestId("login-email")


