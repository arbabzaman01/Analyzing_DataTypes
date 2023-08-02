"use strict";
var nameOfUser = "arbab";
var nameOfUser = "arbab";
console.log("data type is:");
console.log(typeof nameOfUser);
/*How would you use the typeof operator to check the type of 'myVariable'
and store it in a variable called 'typeResult'*/
var typeResult = 'myVaribale';
console.log("data type is:");
console.log(typeof typeResult);
/*After using the typeof operator, what will be the value of 'typeResult'
 when 'myVariable' is assigned a string "Hello, World!"?*/
var myVariable;
myVariable = "Hello World";
typeResult = typeof myVariable;
console.log("data type  is:");
console.log(typeResult);
/*What will be the value of 'typeResult' when 'myVariable'
 is assigned a number, e.g., 42?*/
myVariable = 42;
typeResult = typeof myVariable;
console.log("data type is:");
console.log(typeResult);
/*How would you modify the code to make 'myVariable' have the type 'number'
 explicitly without using the 'typeof' operator? */
myVariable = 42;
console.log("myVariable is :");
console.log(myVariable);
var MyVariable = 12;
console.log("MyVariable is :");
console.log(MyVariable);
var VariableStore = "arbab ";
console.log("VariableStore is :");
console.log(MyVariable);
/*Can you use a conditional statement to check if 'myVariable'
is of type 'string' and then log "It's a string!" if the condition
is true, and "It's not a string." otherwise?*/
var myVariable;
if (typeof myVariable == 'string') {
    console.log("its a string");
}
else {
    console.log("not string");
}
/* Instead of using 'any', how would you define 'myVariable' with a
union type to allow it to be either a string or a number?*/
var VAR;
VAR = "hello";
console.log("VAR is:");
console.log(VAR);
MyVariable = 12;
console.log("VAR is:");
console.log(MyVariable);
/*How would you modify the code to ensure that
'myVariable' is readonly and cannot be reassigned once it's initialized?
*/
const MyVar = "HELLO world";
console.log("My variable is :");
console.log(MyVariable);
//  MyVariable="New Value";->eror
//console.log(MyVariable);
/* If you want to have a default value for 'myVariable' as
an empty string (""), how would you achieve that?*/
myVariable = "";
console.log("Empty String:");
console.log(myVariable);
