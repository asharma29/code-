let a = [ "a:1", "b:2","c:3","d:4","e:5"];
let b = ["b:2","c:3","d:4","e:5"];

let c = a.concat(b);
console.log(c)

let d = c.filter((ele  , i , arr) => arr.indexOf(ele) === i );

console.log(d)