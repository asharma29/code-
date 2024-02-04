// var emp = {
//   company: "xyz"
// }

// var emp1 = Object.create(emp);
// // delete emp1.company;
// console.log(emp1.employee);

// let race = function (){
//   setTimeout(() => console.log("timeout") , 0);
//   setImmediate(() => console.log("immediate"));
//   process.nextTick(() => console.log("nexttick"));
//    console.log("timeoutconsole")
// }

// race();


// const process = require('process');

// process.nextTick(() => {
//   console.log("hellow");
// })

// console.log("world");


function fun (){
    let count = 0 ; 
    function increment (){
      count ++
    }
    let message = `Count is ${count}`;
  
    function log(){
      console.log(message)
    }
    return [increment , log];
  }
  const [increment , log] = fun();
  increment();
  increment();
  increment();
  log();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  