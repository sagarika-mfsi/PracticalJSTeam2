/*Note:
getDate() → local date
toISOString() → UTC date*/

const dt = new Date(); // Current date and time
// console.log(dt);
// console.log(dt.getDate()); //to extract only the date
// console.log(dt.getDay());  // to get the number of the day(0 = sunday) 
// console.log(dt.getFullYear()); //to get the year
// console.log(dt.getMonth());     // 7
// console.log(dt.getHours()); //12
// console.log(dt.getMinutes()); //23

const date1 = new Date(2026, 6, 14);
// console.log(date1); // here its internally converting (date1.toISOString()); so it prints date 13 instead of 14--subtracts 5 hours 30 minutes
//console.log(date1.getDate()); //14
//console.log(date1.toDateString()); //Tue Jul 14 2026
//console.log(date1.toLocaleString()); //7/14/2026, 12:00:00 AM

//Set Date Components
const date2 = new Date();
// date2.setFullYear(2027);
// date2.setMonth(11); // December(0=january)
// date2.setDate(25);
// console.log(date2);

//Formatting
const date3 = new Date();
// console.log(date3.toString()); //Wed Aug 19 2026 10:39:17 GMT+0530 (India Standard Time)
// console.log(date3.toDateString()); //Wed Aug 19 2026
// console.log(date3.toISOString()); // "2026-07-16T12:34:56.789Z"
// console.log(date3.toLocaleDateString()); //8/19/2026
// console.log(date3.toLocaleString());    //8/19/2026, 10:39:17 AM
  
//Date Arithmetic
//  getDate() → gets the current day of the month
//  setDate() → sets the day of the month
//  setDate() is a JavaScript Date method used to change the day of the month for a date
let date4 = new Date("2026-08-10");
date4.setDate(date4.getDate() - 1);     //  returns 09-08-2026
date4.setDate(date4.getDate() + 1);     //  returns 10-08-2026
console.log(date4);


