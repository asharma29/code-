let request = {
    name : 'PN',
    rollNo : 24,
    classDetail : {
        language : 'English',
        division : 'A',
        location : {
            city : 'Bangalore',      
        }
    }
}
function searchObj(obj, keyword){ 
 if (obj.classDetail.language == keyword){
           console.log(true)
 }
            
 if (obj.rollNo == 24){
    console.log("aa" , false)
 }
 
  
}



searchObj (request, 'English') // should return true
searchObj (request, 'rollNo')  // should return false  
 
// Requirement : write a logic in the function searchObj to search for the keyword(arg2) in the obj(arg1), it should only check with the values of the obj and not the keys, if found then should return boolean