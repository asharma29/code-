const arr1 = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'},
    {id: 4, name: 'd'},
    {id: 5, name: 'e'}
];
const arr2 = [
    { id: 5  },
    { id: 3  }
]
 
const output = [
  { id: 5, name: 'e' },
  { id: 3, name: 'c' }
]
 
// requirement : write a function that takes arr1 and arr2 as input params and returns the output that matches the output variable.
let aa = arr1.concat(arr2);
console.log("🚀 ~ file: quinox.js ~ line 21 ~ aa", aa)

let arr3 = aa.filter((ele , i , arr) => arr.indexOf(ele) != i );

console.log(arr3);