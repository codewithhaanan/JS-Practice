//---------------------17-20--------------------

// let array = [[],[],[],[],[],[]]
//  document.write(`${array}`)

// let array =[
//     [0],[1],[2],[3]
//     [1],[0],[1],[2]
//     [2],[1],[0],[1]
// ]

// Print numeric counting from 1 to 10
// for (let i = 1; i <= 10; i++) {
//     document.write(i + "<br>");
// }

// let number = +prompt("enter your number ")
// let lengthOfNumber = +prompt("Enter table length")
// for (let i = 1; i <=lengthOfNumber; i++) {
//     document.write(`${number} * ${i} = ${(number*i)}<br>
//     `)

// }

//  let fruits = ["apple", "banana", "mango", "orange",
// "strawberry"]
// for (let i = 0; i < fruits.length; i++) {

//     document.write(`element at ${i}      ${fruits[i]} <br>`)
// }

// document.write(`<h1>Counting</h1>`)
// for (let i = 0; i <=15; i++) {
//     document.write(`${i} `)

// }

// document.write(`<h1>Reverse counting</h1>`)
// for (let i = 15; i >0; i--) {
//     document.write(`${i} `)

// }

// document.write(`<h1>Counting</h1>`)
// for (let i = 0; i <=15; i+=2) {
//     document.write(`${i} `)

// }

// document.write(`<h1>Counting</h1>`)
// for (let i = 1; i <=15; i+=2) {
//     document.write(`${i} `)

// }

// document.write(`<h1>Counting</h1>`)
// for (let i = 0; i <=20; i+=2) {
//     document.write(`${i}k `)

// }

// let search = prompt("enter what you want search in array")

// let A =["cake","apple pie","cookie","chips","patties"]

// for (let i = 0; i< A.length; i++) {
//      if(search ===A[i]){
//           document.write(`${A[i]} is availalbe at index ${i} in our bakery`)

//      }

// }
// document.write(`we are sorry. ${search} is not available in our bakery`)

// let a = [24, 53, 78, 91, 12]
// let largest = a[0]
// for (let i = 0; i < a.length; i++) {
//     if (a[i] > largest) {
//         largest = a[i]

//     }

// }
//  document.write(`<h1>array items: 24, 53, 78, 91, 12</h1> <h2>the largest number is ${largest}</h2><br>`)

// let a = [24, 53, 78, 91, 12]
// let smallest = a[0]
// for (let i = 0; i < a.length; i++) {
//     if (a[i] < smallest) {
//         smallest = a[i]

//     }

// }
//  document.write(`<h1>array items: 24, 53, 78, 91, 12</h1> <h2>the smallest number is ${smallest}</h2><br>`)

// for (let i = 1; i <= 100; i++) {
//     if (i%5==0) {
//         document.write(`${i} `)
//     }

// }

//______________________chap 17 to 20 complete_____________________

//___________________chap 21 to 25 ______________________

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let firstName = prompt("enter your first name")
// let seconedName = prompt("enter your seconed name ")
// let fullName = firstName + " " + seconedName
// document.write(`${fullName}`)

//  2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// let favName = prompt("enter your fav phone model name")

// document.write(`<h1>my fav phone is: ${favName}</h1>length of string: ${favName.length}<br> `)

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// let str ="pakistan"
//  let str2 = str.indexOf("n")
// document.write(`<h1>String: ${str}</h1> index of 'n' ${str2}<br>`)

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// let str = "hello world";

// let lastIndex = str.lastIndexOf("l");

// document.write(`<h1>String: ${str} <br> Last index of 'l': ${lastIndex}</h1>`);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// let word = "Pakistani";

// let charAt3 = word.charAt(3);

// document.write(`<h1>String: ${word}</h1>`);
// document.write(`<h2>Character at 3rd index is: ${charAt3}</h2>`);

// 6. Repeat Q1 using string concat() method.

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");

// let fullName = firstName.concat(" ", lastName);

// document.write(`<h1>Welcome ${fullName}!</h1>`);

// 7.Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let str = "hyderabad"
// let str2 = str.replace("hydera","islama")
// document.write(`<h1>City: ${str}</h1>  <h1>After replacement: ${str2}</h1><br>`)

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// let message = `Ali and Sami are best friends. They play cricket and
//                 football together`;
// let updateMessage = message.replaceAll("and","&")
// document.write(`${updateMessage}`)

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let str = "472"
// let num = +str
// document.write(`<h1>Value: ${str} </h1><h1>Type:  ${typeof str}</h1> <h1>Value: ${num} </h1> <h1>Type: ${typeof num}</h1><br>`)

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// let input = "peanuts"
// document.write(`<h1>User input: ${input} </h1> <h1>upper case: ${input.toLocaleUpperCase()}</h1><br>`)

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// let input = "javascript"
// let capitale =input.charAt(0).toLocaleUpperCase() + input.slice(1)
// document.write(`<h1>User input: ${input} </h1> <h1>upper case: ${capitale}</h1>`)

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// let num = 35.45
//  let num2 = num.toString().replace(".", "")
// document.write(`<h1>number: ${num} </h1> <h1>result: ${num2}</h1><br>`)
// document.write(`${typeof num2}`)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var username = prompt("Enter your username:");

// for (var i = 0; i < username.length; i++) {
//     var charCode = username.charCodeAt(i);

//     if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//         alert("Please enter a valid username without special symbols [@ . , !]");
//         username = prompt("Enter your username again:");
//         i = -1;
//     }
// }

// alert("Your valid username is: " + username);

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userInput = prompt("Welcome to ABC Bakery! What do you want to order?");

// userInput = userInput.toLowerCase()

// var found = false

// for (var i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput) {
//         found = true;
//         alert(userInput + " is available at index " + i + " in our bakery.");
//         break;
//     }
// }

// if (!found) {
//     alert("We are sorry, " + userInput + " is not available in our bakery.");
// }

// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// let userPassword = prompt("Please Enter your pasword");
// if (userPassword.length < 6) {
//   alert("password must be at least 6 character long ");
// } else if (
//   userPassword.charCodeAt(0) >= 49 &&
//   userPassword.charCodeAt(0) <= 57
// ) {
//   alert("password should not start with number");
// } else {
//   let hasAlphabatic = false;
//   let hasNumber = false;
//   for (let i = 0; i < userPassword.length; i++) {
//     if (
//       (userPassword.charCodeAt(i) >= 65 &&
//       (userPassword.charCodeAt(i) <= 90) || (userPassword.charCodeAt(i) >= 97) &&
//       userPassword.charCodeAt(i) <= 122)
//     ) {
//         hasAlphabatic=true
//     }
// if (userPassword.charCodeAt(i)>=49 && userPassword.charCodeAt(i)<=57) {
//     hasNumber=true
// }

//   }
// if(hasAlphabatic && hasNumber){
//     alert(`your pasword is valid: ${userPassword}`)
// }else{
//     alert(`Password must contain both alphabets and numbers.`)
// }
// }



// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// let university = ("university of bahalwapur")
// let arr = university.split('')
// for (let i = 0; i < arr.length; i++) {
//     document.write(`${arr[i]}<br>`)
    
// }




// 17. Write a program to display the last character of a user
// input.


// let userInput = prompt("enter anything")
// lastInput = userInput[userInput.length -1]
// document.write(`<h1>user input: ${userInput}</h1><h1>last chahracter: ${lastInput}</h1><br>`)



// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string


// let str = (`The quick brown fox jumps over the lazy dog`)
// let strLower = str.toLowerCase().split(" ");
// let count = 0;

// for (let i = 0; i < strLower.length; i++) {
//    if (strLower[i] === "the") {
//       count++;
//    }
// }

// document.write(`<h1>Text: ${str}</h1>`);
// document.write(`<h1>There are ${count} occurrence(s) of word 'the'</h1>`);

//------------------done chap 17 to 25-------------------



















































































