let a = "qwerty";

let b = a.split('').reverse().join('');

console.log(b);


function fun(str){

    str.split(" ");
        let c = '';
    for(let i = str.length-1 ; i>= 0 ; i--){
           c =  c + (str[i]);
    }

        return c;

}

let e = fun("123");

console.log("ee" , e);
