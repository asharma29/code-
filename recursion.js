function fun (ele) {
    for(let i = 0 ; i<ele;i++){
    setTimeout(()=> {
       console.log(i+2)
    } , i*1000 )
}
}


fun(5);