console.log("Hello, World!");
var a=5;
var b=2;
var x=a+b;
var y=a/b;//unary operators
var z=a%b;
var u=a/b;  
var s=a*b;//multiplication operators
var v=a**b;
console.log(x); 
console.log(y);
console.log(z);
console.log(u);
console.log(v);
console.log(s);
console.log(a++);
console.log(++a);
console.log(b--);
console.log(--b);
var x=10;
x+=5;  //assignment operator
console.log(x);
console.log(a==b);
console.log(a!=b);
console.log(a===b);//relational operators
console.log(a>b);
console.log(a<b);
var e=10;
var f=20;
var ternary=(e>f)?e:f; // conditional operators
console.log("the ternary operator is "+ternary);
function myValue1(){
  // document.write("one");
  return "one";
  }
  function myValue2(){
    // document.write("two");
    return "two";
  }
  var p=(myValue1(),myValue2()); //comma operator
  console.log(p);
  var q=5&6;  
  var e=5|6;  //bitwise operator
  var r=5^6;
  var left=5>>6;
  var right=5<<6;
  console.log(q);
  console.log(e);
  console.log(r);
  console.log(left);
  console.log(right);

