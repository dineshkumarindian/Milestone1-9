let proto = function(){
    this.a = 1;
    this.b = 2;
  }
  let o = new proto();
  proto.prototype.b=4;  //prototype chain
  proto.prototype.c=5;
  
  console.log(o.a);
  console.log(o.b);
  console.log(o.c);
  
  var createObj = {
    a:2,
    m:function(){
      return this.a+1;
    }
  }
  console.log(createObj.m());
  var p = Object.create(createObj);
  p.a=4;
  console.log(p.m());
  
  const object1 = {};
  object1.a = 42;
  console.log(object1.hasOwnProperty('a'));
  console.log(object1.hasOwnProperty('tostring'));
  
  function shape(){
    this.color =["red","green","blue"];
  }
  function rectangle(){
    // this.color =["red","green","blue"];
     shape.call(this);                    //constructor stealing
  }
  let instance = new rectangle();
  console.log(instance.color);
  instance.color.push("black");
  console.log(instance.color);
  
  function nameValue(name){
    this.name=name;
  }
  function rollName(){
    nameValue.call(this,"Dinesh");
  }
  let instance1 = new rollName();
  console.log(instance1.name);
  
  
  function superType(name){
    this.name=name;
    this.color = ["red","green","blue"];
    // console.log("the name is:"+name);
  }
  superType.prototype.sayName = function(){
    console.log("The name is "+this.name);
  }
  function sameType(name,age){
    this.age=age;
    superType.call(this,name);
  }
  sameType.prototype = new superType();
  
  sameType.prototype.sayAge = function(){  // combination of inheritance
    console.log("The age is "+this.age);
  }
  
  let instance123 = new sameType("dinesh",22);
  console.log(instance123.color);
  instance123.sayName();
  instance123.sayAge();
  
  let person = {
    talk:true,
    canfly(){
      return 'cannot fly';
    },
  };
  
  let GuestUser ={
    GuestCode:true,
    canCook(){
      return 'cannot say';
    },
  __proto__:person,             // Prototypal Inheritance 
  }
  console.log(GuestUser.talk);
  console.log(GuestUser.canfly());
  console.log(GuestUser.GuestCode);
  console.log(GuestUser.canCook());
  
  function createAnother (original){
    let clone =new Object();  
    clone.name=original.name;
    clone.program =original.program;
    clone.sayHi = function (){
      console.log("the program name is"+clone.name);
    }
    clone.sayProgram = function(){
      console.log("The program platform name is,, "+clone.program);
    }
    return clone;
  }
  
  let clientUser = {
    name:'css',
    program:['HTML','css',"javascript"]
  }
  let anotherPerson = createAnother(clientUser);  //Parasitic Inheritance
  anotherPerson.sayHi();
  anotherPerson.sayProgram();
  