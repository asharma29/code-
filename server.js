const http = require('http');
const  hostname  = 'localhost';
const port = 3000;

const server = http.createServer((err ,  res) => {
    if(err){
        console.log(err)
    } else {
        res.setHeader('Content-Type' , 'plain/text');
        res.end('Hello World')
    }
})

server.listen(port , hostname , () => {
    console.log(`serve is running on http://${hostname}/${port}`)
})