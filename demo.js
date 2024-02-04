const request = require("request");


const options = {
    "url": "https://reqres.in/api/users", 

}

request(options , (err , res) => {

    if (err){
        console.log(err)
    } else {

        console.log(JSON.stringify(res.body))
    }


})