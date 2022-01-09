console.log("Hello, World!");
//dynamic properties
let value1 = 10;
console.log(typeof (value1));  //number
let str = "dinesh";
console.log(typeof (str)); //string
let bool = true;
console.log(typeof (bool)); //Boolean
let define;
console.log(typeof (define));//undefined
let nullFine = null;
console.log(nullFine);     //null

let objectValue = { name: "dineshkumar" };
console.log(typeof (objectValue)); //referencr type is object.

let array = ['red', 'green', 'blue'];
console.log(array instanceof Array); //Array

let a = 10;
let b = a;             //coping the value
b = 20;
console.log(a);
console.log(b);

let x = { name: 'dinesh' };
let y = x             //coping th object value
y.name = 'david';
console.log(x.name);
console.log(y.name);

let newEmployee = JSON.stringify(employee);
let secondEmployee = JSON.parse(newEmployee);
secondEmployee.name = 'aakash';
secondEmployee.place = 'Kgode';
console.log(employee);
console.log(newEmployee);
console.log(secondEmployee);

const arrayValue = ["dinesh", "alan", "nowsik", "benwin"];
const copyValue = [];
for (let i = 0; i < arrayValue.length; i++) {
    copyValue[i] = arrayValue[i];         //coping the array value1
}
console.log(copyValue);

const higherValue = (value1, value2, value3) => { // parameter passing
    let largeValue;
    if (value1 > value2 && value1 > value3) {
        largeValue = value1;
    }
    else if (value2 > value1 && value2 > value3) {
        largeValue = value2;
    }
    else {
        largeValue = value3;
    }
    return largeValue;
}
console.log(higherValue(4, 50, 6));


function sumAll() {
    let sum = 0;
    let inc;
    for (inc = 0; inc < arguments.length; inc++) //arguments passing 
    {
        sum += arguments[inc];
    }
    return sum;

}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9));
/* execution context and scope
    1.scope chain agumentation */
function buildUrl() {
    let qs = "the value";
    with (location) {       //with statement
        let url = href + qs;
    }
    return url;
}
console.log(buildUrl());

const handlingBlock = () => {  // try-catch block
    let x = 2;
    try {
        x = x + y;
    }
    catch (err) {
        console.log(err);
    }
}
handlingBlock();

if (true) {
    var color = "red";
}
console.log(color);
for (var i = 0; i < 10; i++) {
    // doSomething(i);
}
console.log(i);                  // no Block level scope with var

var a = 10;                      // global variable
function functionA() {           // functionA Execution context
    console.log("aFunction");
    function functionB() {
        console.log("bFunction");
    }
    functionB();                   // functionB Execution context
}
functionA();
console.log(a);                  //Global execution context





