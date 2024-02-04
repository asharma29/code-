function compareTriplets(a, b) {
    let bob = 0 ; 
    let alice = 0; 
    let result   = []; 
    for(let i = 0; i < a.length; i++){
        
            if(a[i] === b[i]){
                console.log(a[i]  , b[i]); 
                result .push()
            }
            if(a[i] > b[i]){
                console.log(a[i]  , b[i]);
                // bob = bob + 2;
                result .push(1) ;
            }
            if(a[i]  < b[i]){
                console.log(a[i]  , b[i]);
                // alice = alice + 2;
                result .push(2)
            }
        }

        return result;
    }
    
    
  console.log(  compareTriplets ([3,6,7] , [5,6,10]));