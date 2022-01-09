const createNewPerson = (name) => {
  const obj = {};
  obj.name = name;
  return obj;
  greeting = () => {
    console.log('Hi i am ' + obj.name + '');
  }
}
const nameValue = createNewPerson('dinesh');
console.log(nameValue);


const person = new Object();   //Object
person.firstName = "dinesh";
person.lastName = "kumar";
person.age = 22;
person.place = "Tiruchengode";
console.log("My name is " + person.firstName + person.lastName + "." + person.age + " years old in " + person.place);//type propertice objectName.property 

const user = {
  firstName: "dinesh",
  age: 22,
  designation: "software developer"
}
console.log(person["firstName"] + " " + person["age"] + " " + person["designation"]);  //objectName["property"]
const detail = {
  fname: "dinesh",
  lname: "kumar",
  age: 22
}
let x = "";
for (let i in detail) {
  x += detail[i] + "  ";     //objectName[expression] 
}
console.log(x);

function personValue(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}
const myValue = new personValue('dinesh', 'kumar', 22);
console.log(myValue.firstName);
console.log(myValue.lastName);
console.log(myValue.age);

const personOne = {
  firstName: "gokul",
  lastName: "akshay",
  language: "",
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}
//   set lang(lang){
//   this.language=lang;
//   }
//   person.lang="english";
// }
// console.log(personOne.fullName);
// console.log(personOne.language);
const person123 = {
  name: "dinesh",
  age: 30,
  city: "Tiruchengode"
};
let myObject = Object.values(person123);
console.log(myObject);
let myValue123 = JSON.stringify(person123);
console.log(myValue123);
const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: "Dinesh",
    writable: true
  },
  property2: {
    value: "logu",
    writable: true
  }
});
console.log(object1.property1);
console.log(object1.property2);
let person = {};
person.age = 25;
delete person.age;
console.log(person.age);
'use strict';
let user = {};
Object.defineProperty(user, 'ssn', {

  configurable: false,     // configurable
  value: 15                //value
})
// Object.defineProperty(user,'ssn',{
//   configurable:true,
//   value:10
// })                  //cannot redefine property
delete user.ssn;
console.log(user.ssn);

let userFine = {};
userFine.firstName = "dinesh";
userFine.age = "22";
userFine.IdCode = "012-38-9119";
for (let prop in userFine) {
  console.log(prop);
}
Object.defineProperty(userFine, 'IdCode', {
  enumurable: true
});
for (let i in userFine) {
  console.log(i);
}
let personInfo = {
  firstName: "kavin",
  lastName: "nandha"
}
Object.defineProperty(personInfo, 'fullName', {
  get: function () {
    return this.firstName + " " + this.lastName;
  }
  // function (value) {
  //   let parts = value.split(' ');
  //   if(parts.length == 2){
  //     this.firstName = parts[0];
  //     this.lastName = parts[1];
  //   } else {
  //     console.log("Invalid name format");
  //   }
  // }

});
console.log(person.fullName);
let product = {};
Object.defineProperties(product, {
  name: {
    value: "dinesh"
  },
  price: {
    value: "50"
  },
  tax: {
    value: 0.1
  },
  netPrice: {
    get: function () {
      return this.price + " " + this.tax;
    }
  }
})
console.log(product.name);
const natural = {    //object liternal
  flower: 'rose',
  tree: 'cocount Tree',
  plant: 'tomato'
}
console.log(natural.flower);
console.log(natural.tree);
console.log(natural.plant);

const myCar = new Object();   //object creation
myCar.brand = 'BMW';
myCar.model = 'BMW x7';
myCar.gear = 'automatic';
console.log(myCar);
console.log(myCar.gear);

const myBike = {
  brand: 'bajaj',
  model: 'plusar ns200',
  gear: 'ordinary gear'
}
console.log(myBike);
myBike.color = 'block and red';
console.log(myBike);

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  console.log(this.make + " the model is " + model + " invented the year is " + year);
}
let CarWork = new Car('eagle', 'Talon TSi', '1993');

const animal = {
  type: 'Lion',
  displayAnimal: function () {
    console.log(this.type);
  }
};
// animal.type = "Tiger";
const animal1 = Object.create(animal); // object.create()
animal.displayAnimal();

const fish = Object.create(animal);
fish.type = 'Fishes';
fish.displayAnimal();

const personOne = {
  isHuman: false,
  printIntroduction: function () {
    console.log('my Name is ' + this.name);
  }
}
let me = Object.create(personOne);
me.name = 'Dineshkumar';
me.isHuman = true;
me.printIntroduction();

function vehicle(name, maker, engine) {
  this.name = name;
  this.maker = maker;
  this.engine = engine;

}
let car = new vehicle('GT', 'BMW', '1998');//object create constructor
console.log(car.name);
console.log(car.maker);
console.log(car['engine']);

class Vehicle1 {                  //using class
  constructor(name, maker, engine) {
    this.name = name;
    this.maker = maker;
    this.engine = engine;
  }
}
let car1 = new Vehicle1('BMWX7', 'BMW', '1993');
console.log(car1.name);
console.log(car1.maker);
console.log(car1.engine);
console.log(car1);

let factor = function (type) { //factory pattern
  let hour;
  if (type == "fulltime") {
    hour = 8;
  } else if (type == "parttime") {
    hour = 5;
  } else if (type == "temporary") {
    hour = 6;
  } else if (type == "constractor") {
    hour = 7;
  }
  return type + " Job worker hour is.. " + hour;
}
console.log(factor("fulltime"));
console.log(factor("parttime"));
console.log(factor("temporary"));
console.log(factor("constractor"));

function phone(brand, model, counterDesignedIn, counterMadeIn) {
  this.brand = brand;
  this.model = model;
  this.counterDesignedIn = counterDesignedIn;
  this.counterMadeIn = counterMadeIn;

  return {
    brand: brand,
    model: model,
    counterMadeIn: counterMadeIn,
    counterDesignedIn: counterDesignedIn
  }
}
let phone1 = new phone('nokia', '3310', 'india', 'india'); // constructor pattern
let phone2 = new phone('samsung', 'samsung galaxy', 'koria', 'koria');
let phone3 = new phone('redmi', 'redmi9', 'china', 'china');
console.log(phone1);
console.log(phone2);
console.log(phone3);

function person(first, last, age, status) {
  this.firstName = first;
  this.last = last;
  this.age = age;
  this.status = status
  this.show = function () {
    return "firstName: " + this.firstName + "lastName: " + this.last + "nationality " + this.nationality;
  }
}
let value = new person("dinesh", "kumar", "22", "good");
person.prototype.nationality = "india";  //prototype object
console.log(value.show());

//prototype & combination of prototype and constructor pattern
function Customer(firstName, lastName, status) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.status = status;
  this.show = () => {
    console.log("firstName: " + this.firstName + " lastName: " + this.lastName + " status : " + this.status);
  }
}
function CustomerPrototype(proto) {
  this.proto = proto;
  this.clone = function () {

    var customer = new Customer();

    customer.firstName = proto.firstName;
    customer.lastName = proto.lastName;
    customer.status = proto.status;
    return customer;
  }
}
let proto = new Customer("logu", "nathan", "good");
// console.log(proto.show());
let protoType = new CustomerPrototype(proto); //combination of prototype & constructor 
// console.log(protoType.clone());    
let customerOne = protoType.clone();
customerOne.show();

function personInfo(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}
personInfo.prototype.sayName = function () {   //dynamic prototype pattern
  console.log(this.name);
}
personInfo.prototype.printAge = function () {
  console.log(this.age);
}
let friend = new personInfo("akshay", "22", "software Engineer");
friend.sayName();
friend.printAge();

function detailPerson(name, age, job) {
  let o = new Object();   // parasitic constructor pattern
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = () => {
    console.log(" Name is : " + o.name + " age is : " + o.age + " job is : " + o.job);
  };
  return o;
}
const personDetail = new detailPerson("gokul", "22", "associate engineer");
personDetail.sayName();

function animal(name) {  // Durable constructor pattern
  var o = new Object();
  o.identity = () => {
    console.log(name);
  }
  return o;
}
let alien = animal("Tiger");
alien.identity();

