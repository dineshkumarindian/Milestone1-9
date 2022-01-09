 "use strict";
let firstname,lastName;
firstname="dinesh";     
lastName="kumar";
x=3.14;
document.getElementById("demo").innerHTML=firstname+lastName;  //use strict
let a,b,c;
a=5;
b=4;
c=a+b;//statements
console.log(c);
var firstName="dinesh";//variables
let lastname="kumar";

const name="lala";
console.log(firstName+lastname);
console.log(name);
var nameval1="dinesh";
var percentage=84.00;
var rollNumber=15;
console.log(typeof nameval1); //typeof operator
console.log(typeof percentage);
console.log(typeof rollNumber);
var grade; //undefined
console.log(grade);
var foo=null;  //null
console.log(foo);
console.log(typeof null);
const car={type:"Honda",model:" honda HR-V",color:"white"}; //object
console.log(car.type);
let text = "Please visit Microsoft and Microsoft!";//string
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);
const cars=["Saab", "Volvo", "BMW"];//array
console.log(cars);
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());
console.log(fruits.pop());
console.log(fruits.push("papaya"));
let text1='{"employee":['+'{"firstName":"dinesh","lastName":"kumar"}'+
          '{"firstName:"loga","lastName":"nathan"}'+'{"firstName:"aakash","lastName":"shanmugam"}]}';
const obj=JSON.parse(text1);  //JSON object
console.log(obj);

