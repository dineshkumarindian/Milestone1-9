const DisplayNo = (number) => {
console.log(number);
const newNumber = number - 1;
if (newNumber > 0) {
  DisplayNo(newNumber);
}
}
DisplayNo(4);

const fibonnaciSeq = (value) => {
  if (value < 2) {
    return value;
  }
  else {
    return fibonnaciSeq(value - 1) + fibonnaciSeq(value - 2);
  }
}
const nTerms = 5;
for (let i = 0; i < nTerms; i++) {
  console.log(fibonnaciSeq(i));   //Recursion
}
let employee = {
  name: 'dinesh',
  age: 22,
  place: 'Tgode'
}
let newEmployee = JSON.stringify(employee);
let secondEmployee = JSON.parse(newEmployee);
secondEmployee.name = 'aakash';
secondEmployee.place = 'Kgode';
console.log(employee);
console.log(newEmployee);
console.log(secondEmployee);

let counter = 0;
const add = () => {
  counter += 1;
  return counter;
}
console.log(add());   //closure in function expresssion
console.log(add());
console.log(add());

let greet = function () {
  console.log('welcome to all');
}
let greetOne = function (text) {
  console.log('welcome to ' + text);
}
greet();
greetOne('dinesh');

let greetArr = () => {
  console.log('invite everyOne All');
}
greetArr();

const addition = (function () {
  let value = 0;
  return function () {    //anonyms function
    value = value + 1;
    return value;
  }
})();
console.log(addition());

console.log("Hello World!");
const user = {
  firstName: 'dinesh',
  lastname: 'kumar',
  age: 22,
  fullDetail: function () {
    return this.firstName + " " + this.lastname + " " + this.age; //this object
  }
}
console.log(user.fullDetail());

"use strict";
function myFunction() {
  return this;
}
console.log(myFunction());

const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
const person2 = {
  firstName: "dineshkumar",
  lastName: "Elangovan"
}
const person3 = {
  firstName: "gokul",
  lastName: "krishnan"
}
console.log(person.fullName.apply(person2));
console.log(person.fullName.call(person3));

const functionValue = () => {
  return this;
}
console.log(functionValue());
const outputNumber = (count) => {

  let i = 0;
  for (i = 0; i < count; i++) {
    let name = "dinesh";             //block scope
    console.log("the i value is" + i);
    console.log(name);
  }
  console.log(i);
  console.log(name);
}
class Example {
  static staticVariable = 'dinesh';      //static variable
  static staticMethod() {                 //static method
    return 'staticVarible is :' + this.staticVariable;
  }
}

console.log(Example.staticMethod());

function employeeDetails() {
  let name = "dinesh";
  let age = 22;
  let designation = "developer";
  let salary = "10000"
  return {
    name: name,
    age: age,
    designation: designation,
    salary: salary
  }

}
let newEmployee = employeeDetails() //module pattern
console.log(newEmployee.name);
console.log(newEmployee.age);
console.log(newEmployee.designation);
console.log(newEmployee.salary);

function EmployeeDetails() {
  let name = "dinesh";
  let age = 22;
  let designation = "software developer";
  let salary = 10000;

  let employeeBonus = (amount) => { // abstraction can achieve module pattern
    salary = salary + amount;
    return salary;
  }

  return {
    name: name,
    age: age,
    designation: designation,
    salary: salary,
    employeeBonus: employeeBonus
  }
}
let newEmployee = EmployeeDetails()
let userEmployee = newEmployee.employeeBonus(1000);
console.log(userEmployee);
console.log(newEmployee.name);
console.log(newEmployee.age);
console.log(newEmployee.designation);
console.log(newEmployee.salary);
console.log('employee salary and bonus ' + userEmployee);

(function () {
  console.log('Immediately invoked function execution');
})();//trailing parentheses () allow you to call the function


let person = {
  firstName: 'John',
  lastName: 'Doe'
};

(function () {
  console.log(`${person.firstName} ${person.lastName}`);
})(person);

