/*1. Declare a variable called age & assign to it your age. Show
your age in an alert box.
*/
//let age = "19"
//alert(`I am ${age} years old.`)

/*2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”.*/

//let visitors = "14"
//alert(`you have visited this site ${visitors} times`)

/*3. Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser:
*/

/*let birthYear = 1900
document.write(`my birth year is ${birthYear}<br>`)
document.write(`data type of my declared variable is${typeof birthYear}`)*/

/*4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”.*/

// let customerName = "Abdul Hanan";
// let productTitle = "Jackets";
// let customerOrder = "5 ";
// let storeName = "Insharah's Store";
//document.write(`${customerName} Ordered ${customerOrder} ${productTitle} on ${storeName}`)

//-------------------Assignment 3 Done------------------

//1. Declare 3 variables in one statement.
// let name = a,b,c
//2. Declare 5 legal & 5 illegal variable names.
//legal

// let nameCustomer = "hani";
// let city_of = "BWP";
// let age = 70;
// let $order1 = "";
// let _name = "";
//illegal
/*
let 1nameCustomer ="hani"
let city-of ="BWP"
let age@ = 70
let orderNo1# =""
let _name! =""
*/

/*
3. Display this in your browser
a) A heading stating “Rules for naming JS variables”
b) Variable names can only contain ______, ______,
______ and ______.
For example $my_1stVariable
c) Variables must begin with a ______, ______ or
_____. For example $name, _name or name
d) Variable names are case _________
e) Variable names should not be JS _________

*/

/*
document.write(`<h1>“Rules for naming JS variables”
</h1><br>`)
document.write(`
b) Variable names can only contain character,digits,
_ and $.
For example $my_name
c) Variables must begin with a characters, _ or
$. For example $insharah, _hanan or hani
d) Variable names are case sensitive.
e) Variable names should not be JS keywords
example    (console,let )Etc
`)
*/

//Assignment 4 donee

/*1. Write a program that take two numbers & add them in a
new variable. Show the result in your browser.
*/

/*
let num1 = 2
let num2 = 3
let newNum = num1+num2
document.write(`summ of ${num1} and ${num2} is ${newNum}`)
*/

/*2. task for subtraction, multiplication, division &
modulus.
*/
/*
let num1 = 5
let num2 = 3
let newNum = num1-num2
document.write(`Subbtraction of ${num1} and ${num2} is ${newNum}`)
*/

/*3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value
MATH EXPRESSIONS | JAVASCRIPT
Page 2 of 9
after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”.
*/
/*
let num;
document.write(`Value
after variable declaration is ${num}<br>`)
 num = 12;
document.write(`Initial
value ${num}<br>`)
num++;
document.write(`Value
after increment ${num}<br>`)
num+=2
document.write(`Value
after variable addition is ${num}<br>`)
num--
document.write(`Value
after variable decrement is ${num}<br>`)
let reminder = num%3
document.write(`the reminder ${reminder}`)
*/

/*4. Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie
*/

/*
let movieTicketPrice = 15000
let tickets = 5
let totalTickets = movieTicketPrice*tickets
document.write(`total cost to buy ${tickets} tickets to a movie is ${totalTickets}`)
*/

/*5. Write a script to display multiplication table of any
number in your browser. E.g
*/
/*
let number = 5;
document.write(`<h2>Table of ${number}</h2>`);

document.write(`${number} x 1 = ${number * 1} <br>`);
document.write(`${number} x 2 = ${number * 2} <br>`);
document.write(`${number} x 3 = ${number * 3} <br>`);
document.write(`${number} x 4 = ${number * 4} <br>`);
document.write(`${number} x 5 = ${number * 5} <br>`);
document.write(`${number} x 6 = ${number * 6} <br>`);
document.write(`${number} x 7 = ${number * 7} <br>`);
document.write(`${number} x 8 = ${number * 8} <br>`);
document.write(`${number} x 9 = ${number * 9} <br>`);
document.write(`${number} x 10 = ${number * 10} <br>`);
*/




/*6. The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”
*/
/*
let celsiusTemp = 500
let farenheit = (celsiusTemp * 9/5
) + 32;
document.write(`${celsiusTemp}&deg;C to ${farenheit}&deg;F<br>`)

let f = 500
let c = (f -32
) *5/9;
document.write(`${f}&deg;F to ${c}&deg;C`)
*/






/*7. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables
*/
/*
let item1 = 500
let item2 = 600

let quaItem1 = 2
let quaItem2 = 3
let totalQuaItem = item1*quaItem1

let totalItems2 = item2*quaItem2
document.write(`${totalItems2}`)

totalCost = totalItems2+totalQuaItem
document.write(`price of item1 is ${item1}<br>`)
document.write(`quantity of item1 is ${quaItem1}<br>`)
document.write(`price of item2 is ${item2}<br>`)
document.write(`quantity of item2 is ${quaItem2}<br>`)
document.write(`total cost of your order ${totalCost}`)
*/



/*8. Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser
*/
/*
let totalMarks = 500
let obtainedMarks = 300
let percentageOfMarks = (obtainedMarks/totalMarks)*100
document.write(`<h1>Marks Sheet</h1><br>`)
document.write(`total marks ${totalMarks}<br>`)
document.write(`obtained marks${obtainedMarks}<br>`)
document.write(`Percentage of marks ${percentageOfMarks}`)
*/







/*9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.

*/

/*
let  usDollers = 10
let saudiRiyals = 25
let inPkr = usDollers*282+saudiRiyals*75
document.write(`<h1>Currency in PKR</h1><br>`)
document.write(`Total currency in PKR: ${inPkr}`)
*/



/*10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression
*/
/*
let num;
document.write(`initialize<br>`)
num=+5;
document.write(`add  ${num}<br>`)
 let num2=num*10;
document.write(`multiply ${num2}<br>`)
let num3=num2/2;
document.write(`divided ${num3}<br>`)
*/










/*11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.
Output them to the screen like so: “They are either NN or NN
years old”.
*/
/*
let currentYear = 2025
let birthYear = 2006
let totalAge = currentYear-birthYear
document.write(`<h1>Age calculator</h1><br>`)
document.write(`current year${currentYear}<br>`)
document.write(`birth year ${birthYear}<br>`)
document.write(`your age ${totalAge}`)
*/








/*12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.

b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The
area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
*/

/*
let circleRadius = 10
let circumferanceCircle = 2*3.142*circleRadius
let circleArea = 3.142*circleRadius*2 
document.write(`<h1>The Geometrize</h1><br>`)
document.write(`Radius of circle ${circleRadius}<br>`)
document.write(`the circumferance is ${circumferanceCircle}<br>`)
document.write(`the area is ${circleArea}`)
*/







/*

        let favoriteSnack = "Chocolate Chip Cookies";

        
        let currentAge = 20;

        
        let maxAge = 80;

        
        let perDay = 2;


        let yearsLeft = maxAge - currentAge;
        let totalSnacks = yearsLeft * 365 * perDay;

        
        document.write(`Favorite Snack: ${favoriteSnack} <br>`);
        document.write(`Current Age: ${currentAge} <br>`);
        document.write(`Estimated Maximum Age: ${maxAge} <br>`);
        document.write(`Amount Per Day: ${perDay} <br>`);
        document.write(`You will need ${totalSnacks} ${favoriteSnack} to last you until the ripe old age of ${maxAge}.`);
    

*/



//------------done assignment 5  ---------------


//------------assignment 6to11----------------------



/*. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser:
*/
/*
let num = 20
document.write(`the value of a ${num} <br>`)
++num
document.write(`the value of ++num is: ${num}<br>`)
document.write(`Now the value is : ${num}<br>`)
num++
document.write(`the value of num++ is: ${num}<br>`)
document.write(`Now the value is : ${num}<br>`)
--num
document.write(`the value of --num is: ${num}<br>`)
document.write(`Now the value is : ${num}<br>`)
num--
document.write(`the value of num-- is: ${num}<br>`)
document.write(`Now the value is : ${num}<br>`)
*/






/*2. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;// 
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
*/
// let a = 10
// let b = 8 //2 variable declare &assign 
/*
--a//iska  mtlb phly - kry ga phir ans is liya ik km hu jay ga
document.write(`value at 1st step of --a ${a}<br>`)//9
--b//same    id tk hu gya 
document.write(`${b}<br>`)//7
a - b ab dono ko minues krna 9-7
document.write(`${a - b}<br>`)//2 ya a gya
++b ab idr 7 m add huga 8 hu jay ga asa mera mannna
document.write(`${b}<br>`)//8
b-- idr 8 phly rhy ga baa m - huga
document.write(`${b}<br>`)//7 
b + b
document.write(`${b + b}<br>`)// dono same valuse hugi b ki is liya 14 ana chahiya but ik zydaa ataa h whyyy yhi confusuio9n h 
*/

// ab sunye 

// var a = 2,
// var b = 1;

// a = 1
// b= 0
// result = 3



// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// sb se phly a ki value 2 hai 

// --a; => 1 
// --b => 0

//  --a - --b; = 1 - 0 => 1 okay?

// ++b;  => 1

// --a - --b + ++b; = 1 + 1 => 2
//  b-- 

// --a - --b + ++b + b--; --a - --b + ++b 



/*3. Write a program that takes input a name from user &
greet the user.
*/

//let userInput = prompt("Enter your Name here")
//document.write(`Asslamoalikum ${userInput}`)



/*5. Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default.
*/

/*
let num = prompt("Enter table Number (Default: 5)");

if (num === "" || num === null) {
    num = 5;
} else { 
    num = Number(num);
}

document.write(`<h2>${num} ka Table</h2>`);
document.write(`${num} × 1 = ${num * 1} <br>`)
document.write(`${num} × 2 = ${num * 2} <br>`);
document.write(`${num} × 3 = ${num * 3} <br>`);
document.write(`${num} × 4 = ${num * 4} <br>`);
document.write(`${num} × 5 = ${num * 5} <br>`);
document.write(`${num} × 6 = ${num * 6} <br>`);
document.write(`${num} × 7 = ${num * 7} <br>`);
document.write(`${num} × 8 = ${num * 8} <br>`);
document.write(`${num} × 9 = ${num * 9} <br>`);
document.write(`${num} × 10 = ${num * 10} <br>`);
*/





/*
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table)
*/


let sub1  = prompt("Enter your 1st Subject")
let sub2  = prompt("Enter your 2nd Subject")
let sub3  = prompt("Enter your 3rd Subject")

let sub1_total = 100 
let sub2_total = 100 
let sub3_total = 100    

let totalMarks = 300

let sub1Marks = +prompt(`Enter your ${sub1} Marks`)
let sub2Marks = +prompt(`Enter your ${sub2} Marks`)
let sub3Marks = +prompt(`Enter your ${sub3} Marks`)   

let obtainedMarks = sub1Marks+sub2Marks+sub3Marks

let percentage1 = ((sub1Marks/sub1_total)*100).toFixed(0) 
let percentage2 = ((sub2Marks/sub2_total)*100).toFixed(0) 
let percentage3 = ((sub3Marks/sub3_total)*100).toFixed(0) 

let totalPercentage = ((obtainedMarks/totalMarks)*100).toFixed(0)


document.write(`<table>
    <tr>
        <th>SUBJECT</th>
        <th>TOTAL MARKS</th>
        <th>OBTAINED MARKS</th>
        <th>PERCENTAGE</th>
    </tr>
    <tr>
        <td>${sub1}</td>  
        <td>${sub1_total}</td>
        <td>${sub1Marks}</td>
        <td>${percentage1}%</td>
    </tr>
    <tr>
        <td>${sub2}</td>
        <td>${sub2_total}</td>
        <td>${sub2Marks}</td>
         <td>${percentage2}%</td>
    </tr>
    <tr>
        <td>${sub3}</td>
        <td>${sub3_total}</td>
        <td>${sub3Marks}</td>
         <td>${percentage3}%</td>
    </tr>
   

    <tr>
        <th></th>
        <th>${totalMarks}</th>
        <th>${obtainedMarks}</th>
        <th>${totalPercentage}%</th>
    </tr>
</table>`


