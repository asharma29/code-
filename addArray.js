let a = [3,4,5,6,7 , 8 ,1 , 6 , 3];
let sum = 12 ; 
// let obj =  {};

let result = [];

// for (let i = 0 ;i<a.length;i++){
//     if(obj[a[i]]){
//         result.push([obj[a[i]] , a[i]])
//     }else {
//         obj[sum - a[i]] = a[i];
//     }
// }

// console.log(result);

for (let i = 0;i<a.length;i++){
    for (let j = i+1; j <a.length;j++){
        if( sum === a[i] * a[j]){
            result.push([a[i] , a[j]] )
        }
    }
}

console.log(result);