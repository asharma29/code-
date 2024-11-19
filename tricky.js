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


// function fun (){
//     let count = 0 ; 
//     function increment (){
//       count ++
//     }
//     let message = `Count is ${count}`;
  
//     function log(){
//       console.log(message)
//     }
//     return [increment , log];
//   }
//   const [increment , log] = fun();
//   increment();
//   increment();
//   increment();
//   log();
  
  
  
let arr = [1 ,2 ,3];

let newArr = arr.map((ele) => ele *2);

newArr.push(4);

arr[0] = 0;

console.log(arr); // 0 ,2,3

console.log(newArr);  // 2 , 4 , 6 , 4
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  