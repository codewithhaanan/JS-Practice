 /*Q2. Even Numbers – Write a program that prints all even numbers between 1 and 20 using a
while loop*/
let num = 2; 
while (num <= 20) {
    console.log(num);
    num += 2;
}

/*Q3. Name Repetition – Write a program that prints your name 5 times using a for loop. with this patterns:
 (1. yourname
  2. yourname  3. yourname ,etc...)
*/
let name = "Abdul Hanan";
let output = "";

for (let i = 1; i <= 5; i++) {
  output += i + ". " + name + "   ";
}

console.log(output);
