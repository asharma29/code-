

let str = "my name is abhishek sharma";

let b = str.split(" ");

let c = b.reduce((acc , crr) => crr.length > acc.length ? crr :acc  );

console.log(c);


