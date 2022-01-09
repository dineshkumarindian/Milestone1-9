const maxValue = (a,b,c) =>{
    let value1,value2,value3,value4,value5;
    let output;
    value1=a;
    value2=b;
    value3=c;
    if(value1>value2 && value1>value3){
      output=value1;
    }
    else if(value2>value1 && value2>value3){
      output=value2;
    }
    else{
      output=value3;
    }
    return output;
    }
    console.log(maxValue(10,20,30)); //value4,value5 isn't used in this program so it's can be gabage collector.
    
    
    let user ={
      name:"dinesh"    //name is unreachable so its free of memory space.
    }
    user=null;
    console.log(user);
    
    let userName ={  //first object is created 
      rollname:{    // second object is created
        registerNo:15
      }
    }
    console.log(userName); // reference counting
    
    let obj = { // first object created 
    name1 : { // second object created
    neam2 : 10
    }
   }