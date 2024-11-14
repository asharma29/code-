// Hello World! => olleH dlroW!

let str = 'hello World!';
// let b = str.split(' ').map((ele => ele.split('').reverse().join('') ));
// // let arr = []
// // console.log(b);

// let char = '!'
// let c = b.map((ele => {
//     ele.indexOf === '!'
//     return true
// }))
// console.log(c);


let b = str.split('');
console.log(b);
let c = [];
for(let i = 0 ; i < b.length-1 ; i++){
    c.push(b[i]);
}

let d = [];
console.log(c);
for(let i = c.length-1 ; i >=0 ; i--){
 d.push(c[i]);
}

console.log(d.join('') + b.lastIndexOf(b));
