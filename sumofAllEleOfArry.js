// let a = [1,2,3,4,5,6,7,8,9];

// let addition = 0 ;

// let multiply = 1;


// for (let i = 0;i<a.length;i++){
//     addition +=  a[i];
//     multiply *= a[i];
// }

// console.log("additions" , addition);
// console.log("multiply" , multiply);


function fun (ar){
    let sum = 0 ;

    for (let i = 0 ; i< ar.length;i++){
        sum = sum +  ar[i]; 
    }
    console.log(sum);
}

fun([1,2,3,4,5]);