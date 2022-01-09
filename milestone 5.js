var x = myFunction(3, 4);

function myFunction(a, b) { //passing the parameter
  return a * b;
}
console.log(x);


var y = findMax(4, 5, 6);

function findMax() {   //check the arguments of parameter function.
  let max = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }

  }
  return max;

}
console.log(y);

//function value store in the object.
function myFun(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}
const myobj = new myFun("dinesh", "kumar");
console.log(myobj.firstName);
console.log(myobj.lastName);

//function call using Call() keyword
const person = {
  fullname: function () {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName: "Akshay",
  lastName: "kumar"
}
const person2 = {
  firstName: "gokula",
  lastName: "krishnan"
}
const name = person.fullname.call(person2);
console.log(name);

function myFunction() {
  console.log(this);
}
const myContext = { value: 'A' };
myFunction.call(myContext);
myFunction.apply(myContext);

function addFunction() {
  console.log(this);
}
new addFunction();

function myNewFunction(a, b) {
  let num = a + b;
  return num;

}
const value = myNewFunction(4, 5);
console.log(value);

const increment = (a, b) => {
  let output = a + b;
  return output;
}
const answer = increment(3, 2);
console.log(increment(4, 5));
console.log(answer);

const order = [
  { id: 1, item: "Smartphonnes", quantity: 1 },
  { id: 2, item: "A.C", quatity: 1 },
  { id: 3, item: "maagi", quantity: 3 },
]
let result = order.find((order) => order.item == "maagi");
console.log(result);

const obj = {
  someobject: () => {
    return this;
  }
}
const a = obj.someobject

console.log(a());
console.log(obj.someobject())

function myCar() {
  this.fuel = 0;
  this.refuel = function () {
    setTimeout(() => { /* if you put function it takes to perform globally,
                       used in arrow function put it takes to perform in object type. */
      this.fuel += 100;
      console.log("the fuel is.." + this.fuel);
    }, 1000);
  }
}
const carFuel = new myCar()
carFuel.refuel()
console.log(carFuel);



