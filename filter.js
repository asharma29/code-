let a = ['1', '10', '3', '3', '31415926535897932384626433832795', '5'];
let str = "first word unique and and in unique first word";
// let b = [1,2,2,3,3,4,4,1,6]

let b1 = str.split(" ");
let b = b1.filter((ele , i , arr) => arr.indexOf(ele) === i);
let c = b1.filter((ele , i , arr) => arr.indexOf(ele) === b1.lastIndexOf(ele));
console.log("b" , b);
console.log("c" , c);