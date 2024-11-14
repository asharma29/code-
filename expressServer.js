const express = require("express");

const app = express;

const port = '3000';

app.get( '/' , (res , res) => {
    res.send("hello");
});


app.listen(port , () => {

});

