// const http = require('http');

// http.createServer((req,res)=>{
//     res.write('<h1> welcome to my class </h1>');
//     res.end();
// }).listen(1234);


//Imports
const express = require('express');
const morgan = require('morgan');

//APP INIT
const app =express();

//First Route
app.get('/', (req,res)=>{
    res.json({message:"welcome to the class"});
})

app.listen('1234');
