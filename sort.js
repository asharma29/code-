let array =  ['2', '1', '3', '10', '3', '5'];

array.sort((a,b) => {
    if(a>b){
        return 1
    }
    if(a<b){
        return -1
    }
})

console.log(array)

