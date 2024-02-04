let a = [1,2,3,4,5,6,7,3,4,5,6,1];

let b = a.filter((ele , i , arr) => arr.indexOf(ele) === 1 );

console.log(b);