let str = 'aassaawwertt';

let b = str.split('');

let c = {};

for(let i = 0 ; i <b.length; i++){
    if(!c[b[i]]){
        c[b[i]] = 1;
    } else {
        c[b[i]] = c[b[i]] +1
    }
}


let count = 0 ; 

for(let key in c){
    if(c[key] > 1){
        count++;
    }
}
console.log(c);
console.log(count)