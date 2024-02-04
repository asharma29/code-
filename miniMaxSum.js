let a = [7 , 69, 2 ,221 , 8974];
let b = a.sort();
let sum = 0;
let sum1 = 0;
for (let i = 0 ; i < b.length-1;i++){
 sum        += b[i];
}
for (let i = 1 ; i< b.length;i++){
    sum1 += b[i];
}
console.log(sum , sum1) 