let array = '1,2,2,3,5,7,7,9'
let b = array.split('');
let obj = {};
for(let i =0;i<b.length;i++){
    if(!obj[b[i]]){
        obj[b[i]] = 1
    }else {
        obj[b[i]] = obj[b[i]] +1
    }
}



console.log(obj)
