let a = [1,2,3,4,5,6];
let b = [1,2,3,4,5,7];

function fun (a , b ){
    let c = []
    for(let i = 0 ;i<a.length;i++){
        for(let j = 0;j<b.length;j++){
            if(a[i] === b[j]){
                c.push(a[i])
                
                
                
            }
            
        }
    }

    return c
}

console.log(fun(a , b));