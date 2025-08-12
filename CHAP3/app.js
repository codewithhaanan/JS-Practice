/*let num = prompt("Enter the number")
if(num>10){
    console.log("Greater then 10");
    
}else{
    console.log("Less then or Equal to 10");
    
}
*/
/*let age = +prompt("Enter your age")
if (age>=18) {
    console.log("You are adult")
    
    
}else{
    console.log("You are minor");
    
}
    */

//let num = +prompt("Enter number")
//if (num % 2 == 0) {
   // console.log("even");
    
//}else{
   // console.log("old");
    
//}

/*4. Ask the user for the temperature. If it’s more than 30, print "It’s hot outside", otherwise print "Weather is fine".
*/
//let temparature = +prompt("Enter your temperature");
//if(temparature>30){
   // console.log("its hot outsuide");
    
//}else{
   // console.log("weather is fine");
    
//}

/*5. Ask the user for their marks:
If marks are 80 or more, print "Grade A"
If marks are 60 or more, print "Grade B"
If marks are 40 or more, print "Grade C"
Otherwise, print "Fail"

*/

/*let marks = +prompt("Enter your marks")
if(marks>=80){
console.log("Grade A");

}else if(marks>=60){
console.log("grade B");

}else if(marks>=40){
    console.log("grade C");
    
}else{
    console.log("Fail");
    
}*/



/*
6. ATM example: Ask the user for their PIN code. If it’s correct, print "Access granted", otherwise print "Invalid PIN".*/


/*let pinCode = +prompt('Enter your pin')
let truePin = 45
if(pinCode==truePin){
console.log('Access Granted');

}else{
    console.log('Invalid Pin');
    
}*/


/*7. Shopping discount example: Ask the user for their total bill. If the bill is 5000 or more, print "You get a 10% discount", otherwise print "No discount".*/

/*let totalBill = +prompt("Please!Enter your bill")
if(totalBill>=5000){
    console.log('oh Yeah!you got 10% discount');
    
}else{
    console.log('no discount');
    
}*/


/*8. Traffic signal example: Ask the user for the traffic light color.
If the color is "red", print "Stop"
If the color is "yellow", print "Get ready"
If the color is "green", print "Go"
*/
let traficLight = prompt("Enter trafic light colour(Red,Green,Blue)")
traficLight = traficLight.toLowerCase();
if(traficLight== 'red' ) {
    console.log('stop');
    
}else if(traficLight== 'yellow'){
    console.log('get ready');
    
}else{
    console.log('Go');
    
}
