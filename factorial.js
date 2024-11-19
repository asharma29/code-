//5 5*4*3*2*1  Find the factorial of given number ?


function fun(num) {

    let fact = 1;
    for (let i = num; i > 0; i--) {
        console.log(i);
        fact = fact * i;
    }

    return fact;
}

let b = fun(4);

console.log(b);