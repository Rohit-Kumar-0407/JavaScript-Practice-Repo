//This code is to print hello world
console.log("Hello World");
/*This code prints 
hello world in console*/

//Arithmetic Operators
var Val1 = 5;
var Val2 = 4;
console.log("Val1 =",Val1,"Val2=",Val2);
console.log("Val1 + Val2 =",Val1+Val2);
console.log("Val1 - Val2 =",Val1-Val2);
console.log("Val1*Val2 =",Val1*Val2);
console.log("Val1/Val2 =",Val1/Val2);
console.log("Val1%Val2 =",Val1%Val2);
console.log("Val1 raised to power Val2:",Val1**Val2);


//Unary Operators
//Post Increment/Decrement
var Val3 = 5;
console.log("Value of Val3 =",Val3)
Val3++
console.log("Val3++ =",Val3);
var Val3 = 5;
Val3--
console.log("Val3-- =",Val3);
//Pre Increment/Decrement
var Val4 = 6;
console.log("Value of Val4 =",Val4)
console.log("++Val4 =",++Val4);
var Val4 = 6;
console.log("--Val4=",--Val4);

//Assignment Operators
var Val5 = 11;
console.log("Value Of Val5:",Val5);
console.log("Printing Val5 += 5:",Val5 += 5);
var Val5 = 11;
console.log("Printing Val5 -= 5:",Val5 -= 5);
var Val5 = 11;
console.log("Printing Val5 *= 5:", Val5 *= 5);
var Val5 = 11;
console.log("Printing Val5 /= 5:", Val5 /= 5);
var Val5 = 11;
console.log("Printing Val5 %= 5:", Val5 %= 5);
var Val5 = 11;
console.log("Printing Val5 **= 5:", Val5 **=5);

//Comparison Operators
var Val6 = 16;
var Val7 = 30;
console.log("Value of Val6 =",Val6,"Value Of Val7 =",Val7);
console.log("Val6 == Val7:",Val6 == Val7);
console.log("Val6 != Val7:", Val6 != Val7);
//strict comparison operators
var Val8 = 17;
var Val9 ="17";
console.log("Val7 == Val8:",Val7 == Val8);
console.log("Val7 === Val8:",Val7 === Val8);
//other comparison operators 
var Val10 = 34;
var Val11 = 29;
console.log("Val10 is:",Val10,"Val11 is:",Val11)
console.log("Val10 > Val11:",Val10>Val11);
console.log("Val10 < Val11:",Val10<Val11);
console.log("Val10 >= Val11:",Val10>=Val11);
console.log("Val10 <= Val11:",Val10<=Val11);

//Logical operators
var Val12 = 95;
var Val13 = 58;
cond1 = Val12 > Val13;
cond2 = Val12 === 95;
console.log("cond1 && cond2:",cond1&&cond2);
console.log("cond1 || cond2:",cond1||cond2);
console.log("!cond1",!cond1);

//Conditional Statements
//if Condition
var age = 23;
if (age >= 18) {
  console.log("You Can Vote");
}
if (age < 18) {
  console.log("Sorry You Cannot Vote");
}

//if-else condition
var mode = "dark-mode";
var color;
if (mode === "dark-mode") {
  color = "dark";
} else {
  color = "white";
}
console.log(color);

let number = 25
if (number%2 === 0) {
  console.log(number,"is Even");
} else {
  console.log(number,"is Odd");
}

//else-if condition
var mode = "pink";
var color;
if (mode === "dark") {
  color = "dark";
}
else if (mode === "blue") {
  color = "blue";
}
else if (mode === "pink") {
  color = "pink";
} else {
  color = "white";
}
console.log(color);

//Ternary Operators 
var age = 10;
var output =age > 18 ? "adult":"not adult";
console.log(output);

//switch operator
var fruit = "Papayas";
switch (fruit) {
  case "Oranges":
    console.log("Oranges are $0.59 pound.");
    break;
    case "Mangoes":
    case "Papayas":
      console.log("Mangoes and Papayas are $2.79 pound.")
      break;
    default:
      console.log("Sorry, we are out of",fruit);
}
