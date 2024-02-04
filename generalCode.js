let a = '112555'
let b = a.split('');
console.log(b)
let c = {};

for (let i = 0;i<a.length;i++){
    if(!c[b[i]])
    console.log("🚀 ~ file: generalCode.js ~ line 8 ~ !c[b[i]]", !c[b[i]])
    console.log(c[b[i]] = a[i])
}

