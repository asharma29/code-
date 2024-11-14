console.log(a);

var a  = 10;

// console.log(b);

// let b = 20;

demo();

function demo (){
    console.log('sum');
}


setTimeout(() => {
    console.log("first");
} , 1000)

setTimeout(() => {
    console.log("second");
} , 0)

setTimeout(() => {
    console.log("third");
} , 0)

console.log("fourth");

new Promise((resolve , reject) => {
    console.log('fifth')
} , 1000)

// var a = 100;

// {
//     let a = 10
//     console.log(a)
//      a = 10
// }

// console.log(a);