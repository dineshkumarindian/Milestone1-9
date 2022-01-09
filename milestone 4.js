var age=18;
if(age>=18)           //if statement
{
  console.log("qualify of vote in government.");
}

var percentage = 50;
if(percentage>50){             //if-else statement
  console.log("first class");
}
else{
  console.log("second class");
}

var percent = 50;
if(percent>=80 && percent <=100 ){  //else-if statement
  console.log("A grade");
}
else if(percent>50 && percent <80){
  console.log("B grade");
  
}
else{
  console.log("C grade");
}  
  
var dateVal=new Date();
var day=dateVal.getDay();
console.log(day);
switch(day){         //switch statement
  case 0:
    day="SunDay";
    break;
  case 1:
    day="MonDay";
    break;
  case 2:
    day="TuesDay";
    break;
  case 3:
    day="WednesDay";
    break;
  case 4:
      day="Thursday";
      break;
  case 5:
    day="friday";
    break;
  case 6:
    day="saturDay";
    break;
  default:
  day="have a great day";
  break;
}
console.log(day);
const cars=["BMW", "Volvo", "Saab", "Ford"];
var len=cars.length;
text="";
for(var i=0;i<len;i++){  //for loop
  text+=cars[i]+" ";
}
console.log(text);

const person ={fname:"Dineshkumar",lname:"Elangovan",age:21};
text="";

for(let x in person){    //for in loop
  text += person[x]+" ";
}
console.log(text);

var value="";
let num=1;
while(num<10){         //while loop
  value+="the number is"+num;
  num++;
}
console.log(value);

var d=0;
do{   // do-while loop
  console.log(d);
  d++;
}while(d<10);

for(var k=0;k<10;k++){
 if(k==5){
   break;        //break statement
 }
 console.log("the value is.."+k)
}
for(var s=0;s<10;s++){
  if(s%2==0){
    continue;        //continue statement
  }
  console.log("the odd value is.."+s);
}
let aValue,xValue,yValue;
const rValue=10;
with(Math){         //with statement
  aValue=PI*rValue*rValue;
  xValue=rValue*cos(PI);
  yValue=rValue*sin(PI);
}
console.log(aValue);
console.log(xValue);
console.log(yValue);

