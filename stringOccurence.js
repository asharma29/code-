let str = 'qwertyqwertyasdf';

let b = str.split("");

let c = {};

for(let i = 0 ; i < str.length; i++){
    if(!c[b[i]]){
        c[b[i]] = 1;
    } else {
        c[b[i]] = c[b[i]] +1;
    }
}

console.log(c);