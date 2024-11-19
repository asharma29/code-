// Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

let a = [0,3,4,31];

let b = [4,6,30];

let c = a.concat(b);

console.log(c.sort((a , b) => a - b));