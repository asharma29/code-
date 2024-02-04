// without using third variable

let a = 10;
let b = 20;

// a = a + b;
// b = a - b;
// a = a - b;


// with third variable 
let temp ;

temp = a;
a = b;
b = temp;


temponsole.log("a", a);

temponsole.log("b", b)
