function pattern(n){
    let space  = "";
    for (let i = 0 ; i < n; i++){
        for (let j = 0 ; j < n -i ; j++){
                space = space+" ";
        }
    

    for (let k = 0 ; k <  i+1 ; k++){
        space = space +"#"
    }

    space = space +  "\n"
    }
    
    console.log(space)
}

pattern(20)