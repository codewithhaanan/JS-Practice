
//------------------------------chap 9 s 10--------

/*
let city = prompt("Enter your city")
if(city === "bahawalpur"){
document.write(`welcome to the city of nawab`)
}
*/






/*
let gender = prompt("Enter your gendar")
if(gender==="male"){
document.write(`good morning sir`)
}
if (gender ==="female") {
    document.write(`good morning Ma'am`)
}
*/






/*
let lightColour = prompt("Enter trafic light colour")
if (lightColour==="red") {
    document.write(`Please!Stop`)
}
if (lightColour==="yellow") {
    document.write(`Ready to move`)
}
if (lightColour==="green") {
    document.write(`Move Now`)
}

*/









/*
let remaningFuel = +prompt("your feul")
if (remaningFuel<= 0.25) {
    document.write(`Pleae refill the fuel in car`)
}
    */





/*
var a = 4
if (++a === 5) {
    alert("given condition for variable a is true")
}

// b)
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c)
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}

*/











/*

let sub1 = +prompt("Enter marks for Subject 1:");
let sub2 = +prompt("Enter marks for Subject 2:");
let sub3 = +prompt("Enter marks for Subject 3:");
let totalMarks = 300


let obtainedMarks = sub1 + sub2 + sub3;
let percentage = (obtainedMarks / totalMarks) * 100;


let grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}


document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);

*/






/*
let secretNumber =0; 
let guess = +prompt("Guess the secret number (1 to 10):");

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Wrong guess! Try again");
}
*/





/*

let number = +prompt("Enter a number:");

if (number % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is not divisible by 3");
}
*/






/*

let number = +prompt("Enter a number:");

if (number % 2 === 0) {
    alert("The number is Even");
} else {
    alert("The number is Odd");
}
*/






/*
let temperature = +prompt("Enter the temperature:");

if (temperature > 40) {
    alert("It is too hot outside.");
} 
else if (temperature > 30) {
    alert("The Weather today is Normal.");
} 
else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} 
else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} 
else {
    alert("It's freezing outside!");
}
*/











/*
let num1 = +prompt("Enter the first number:");
let num2 = +prompt("Enter the second number:");
let operation = prompt("Enter operation (+, -, *, /, %)");

let result;

if (operation === "+") {
    result = num1 + num2;
} 
else if (operation === "-") {
    result = num1 - num2;
} 
else if (operation === "*") {
    result = num1 * num2;
} 
else if (operation === "/") {
    result = num1 / num2;
} 
else if (operation === "%") {
    result = num1 % num2;
} 
else {
    result = "Invalid operation!";
}

alert("Result: " + result);
*/



                       //----------chap 12-13------------

/*
let char = prompt("Enter a single character:");


let ascii = char.charCodeAt();

if (ascii >= 48 && ascii <= 57) {
    console.log("The input is a Number.");
} 
else if (ascii >= 65 && ascii <= 90) {
    console.log("The input is an Uppercase Letter.");
} 
else if (ascii >= 97 && ascii <= 122) {
    console.log("The input is a Lowercase Letter.");
} 
else {
    console.log("The input is neither a number nor a letter.");
}

*/











/*
let num1 = parseInt(prompt("Enter integar no 1"))
let num2 = parseInt(prompt("Enter integar no 2"))
if (num1>num2) {
    document.write(`${num1} is larger then ${num2}`)

}else if (num2>num1){
    document.write(num2+ "is largest then "+num1)

}else{
    document.write("both are equal")
}*/








/*
let num = +prompt("Enter a number:");


if (num > 0) {
    console.log(num + " is Positive.");
} 
else if (num < 0) {
    console.log(num + " is Negative.");
} 
else {
    console.log("The number is Zero.");
}*/







/*
let num = prompt("enter number")
 num = num.toLowerCase()
if (num.length===1) {
    if (num==="a" || num==="e" ||num==="i" ||num==="o" ||num==="u") {
        document.write(`${num} is vowel`)
    } else {
        document.write(`${num} is not vowel`)
    }
}
*/











/*

let correctPassword = "hanan123";
let userPassword = prompt("Enter your password:");
if (!userPassword) { 
    console.log("Please enter your password");
} 
else if (userPassword === correctPassword) { 
    console.log("Correct! The password you entered matches the original password");
} 
else {
    console.log("Incorrect password");
}*/
















/*
var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}//issue bracket

console.log(greeting); 

*/






/*

let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7PM):"));


if (time >= 0 && time < 1200) {
    console.log("Good Morning");
} 
else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon");
} 
else if (time >= 1700 && time < 2100) {
    console.log("Good Evening");
} 
else if (time >= 2100 && time <= 2359) {
    console.log("Good Night");
} 
else {
    console.log("Invalid time! Please enter between 0000 and 2359.");
}
*/

//                       ------------------done--------------------





/*
//let array[];
//let myArray = new Array();
//let heros =["saddam hussain","Quaid E Azam","Allama Iqbal"];
//let numArray =[1,2,3,4,5,6,7,8,8]
//let boleanArray =[true,false,true,true];
//let mixedArray = ["hanan",12,true,"hani"]
let degreeArray = ["SSC","HSC","BCS","BS","BCOM","MS","M.PHILL","PHD"]
document.write(`<h1>Qualifcation in Pakistan</h1><br>`)
document.write(`${degreeArray[0]}<br>`)
document.write(`${degreeArray[1]}<br>`)
document.write(`${degreeArray[2]}<br>`)
document.write(`${degreeArray[3]}<br>`)
document.write(`${degreeArray[4]}<br>`)
document.write(`${degreeArray[5]}<br>`)
document.write(`${degreeArray[6]}<br>`)
document.write(`${degreeArray[7]}<br>`)

*/










/*
let studentArr = [
    "Hanan","Inshrah","Usman"
]
let score = [300,400,100]
let totalMarks = 700
let per1 = score[0]/totalMarks*100
let per2 = score[1]/totalMarks*100
let per3 = score[2]/totalMarks*100
document.write(`score of ${studentArr[0]} is ${score[0]} percentage ${per1}%<br>`)
document.write(`score of ${studentArr[1]} is ${score[1]} percentage ${per2}%<br>`)
document.write(`score of ${studentArr[2]} is ${score[2]} percentage ${per3}%<br>`)
*/







/*
let colour = ["red","green","blue","black"]
document.write("orignal colour "+ colour +"<br>")
let newcolour = prompt("what colour want you add ")
colour.unshift(newcolour)// agr hm yha new variable m store kraya gy to wo upaded arrry nhi blky length return kry ga is liya new variable m store nhi krawanaa ...
document.write("updated array: "+colour)
*/





/*
let colour = ["red","green","blue","black"]
document.write("orignal colour "+ colour +"<br>")
let newcolour = prompt("what colour want you add ")
colour.push(newcolour)
document.write("updated array: "+colour)
*/




/*
let colour = ["red","green","blue","black"]
document.write("orignal colour "+ colour +"<br>")
let newcolour = prompt("what colour want you add ")
let newcolour2 = prompt("enter seconed colour")
colour.unshift(newcolour,newcolour2)
document.write("updated array: "+colour)
*/





/*
let colour = ["red","green","blue","black"]
document.write("orignal colour "+ colour +"<br>")
colour.shift()
document.write("updated array: "+colour)
*/






/*
let colour = ["red","green","blue","black"]
document.write("orignal colour "+ colour +"<br>")
colour.pop()
document.write("updated array: "+colour)


*/




/*
let colour = ["red","green","blue","black"]
document.write("orignal colour "+ colour +"<br>")
let index = prompt("which index you want to add colour ")
let newcolour = prompt("enter your colour")
colour[index]=newcolour
document.write("updated array: "+colour)
*/






/*
let colour = ["red","green","blue","black"]
document.write("orignal colour "+ colour +"<br>")
let index = prompt("which index you want to add colour ")
let delcolour = prompt("enter your colourhow many color want to delete")
colour.splice(index,delcolour)
document.write("updated array: "+colour)

*/




/*
let score = [700,100,200,300,400,500]
score.sort(function (a, b) {
    return a - b//
})
document.write(`${score}`)
*/




/*
let cityNames = ["lahore","karachi","bWP","RYK"]
document.write(`cities list <br>${cityNames}<br> `)

let cityNames1=cityNames.slice(1,4)
document.write(`Selected cities list <br>
    ${cityNames1}`)

*/




/*
let arr = ["This", "is", "my", "cat"];


let singleString = arr.join(" "); 


document.write(singleString)
*/












/*
let queue = [];


queue.push("Keyboard");
queue.push("Mouse");
queue.push("Printer");
queue.push("Monitor");

document.write("Devices:<br>" + queue.join("<br>") + "<br><br>");


document.write("Out:<br>" + queue.shift() + "<br>");
document.write("Out:<br>" + queue.shift() + "<br>");
document.write("Out:<br>" + queue.shift() + "<br>");
document.write("Out:<br>" + queue.shift() + "<br>");

*/












let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


document.write(
    "<select>" +
    "<option>" + manufacturers[0] + "</option>" +
    "<option>" + manufacturers[1] + "</option>" +
    "<option>" + manufacturers[2] + "</option>" +
    "<option>" + manufacturers[3] + "</option>" +
    "<option>" + manufacturers[4] + "</option>" +
    "<option>" + manufacturers[5] + "</option>" +
    "</select>"
);






