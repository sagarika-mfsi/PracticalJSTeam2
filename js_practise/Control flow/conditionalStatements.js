//Positive, Negative or Zero
let n1 = "kk";
if(n1>0){
    //console.log("positive");
}
else if(n1<0){
    //console.log("negative");
}
else if(n1===0){
    //console.log("zero");
}
else{
    //console.log("invalid");
}

//Grade calculator
let marks = 85;
/*90-100 → A
80-89  → B
70-79  → C
60-69  → D
Below 60 → F*/
if(marks >=90 && marks<=100){
    //console.log("Grade A");
}
else if(marks >=80 && marks<=89){
    //console.log("Grade B");
}
else if(marks >=70 && marks<=79){ // here it can be >70 only
    //console.log("Grade C");
}
else if(marks >=60 && marks<=69){
    //console.log("Grade D");
}
else if(marks >=0){
    //console.log("Grade F");
}
else{
    //console.log("invalid");
}

//Conditional
let x = 10;
if (x > 5) {
    //console.log("A"); //A
} else {
    //console.log("B");
}

//SWITCH Practise
/*let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    case 3:
        console.log("Wednesday");
    default:
        console.log("Invalid");
}*/

//Simple ATM Program-------------------------
let balance = 10000;
let withdraw = -5;
/*Conditions:

Withdrawal <= balance → Withdrawal successful
Withdrawal > balance → Insufficient balance
Withdrawal <= 0 → Invalid amount*/

/*if(withdraw <= balance && withdraw>=0){
    console.log("Withdrawal successful");
    
}else if(withdraw > balance){
    console.log("Insufficient balance");
    
}else if(withdraw <= 0){
    console.log("Invalid amount");
    
}*/

//Write a program to check whether a year is a leap year.
let year = 2004;
if((year%4===0 && year%100!==0) || year%400===0){
    //console.log("leap year");
}
else{
   // console.log("not a leap year");   
}

//Calculator using switch
let a=5,b=10;
let operator = '%';
switch(operator){
    case "*":
        console.log(a*b);
        break;
    case "/":
        console.log(a/b);
        break;
    case "+":
        console.log(a+b);
        break;
    case "-":
        console.log(a-b);
        break;
    case "%":
        console.log(a%b);
        break;
    default:
        console.log("invalid");   
}

//Largest of Three Numbers
let a1=0,b1=-9,c=1;
if(a1>=b1 && a1>=c){
    console.log("a greater");  
}else if(b1>=a1 && b1>=c){
    console.log("b greater");
}
else{
        console.log("c greater");
}