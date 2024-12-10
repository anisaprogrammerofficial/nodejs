// const express = require('express');

// const app = express();
// const HOSTNAME = 'localhost';
// const PORT = 4000;

// app.get('/', (req, res)=>{
//     res.send("<h1>Hi you are visiting Home</h1>");
// })
// app.get('/about', (req,res)=>{
//     res.send('<h1>Hi you are on AboutPage');
// })
// app.listen(PORT, HOSTNAME, () =>{
//     console.log(`Your server is Running on http://${HOSTNAME}:${PORT}`)
// })

const PORT = 4000;
const HOSTNAME = 'localhost';

// const http = require('http');
// const { json } = require('stream/consumers');

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {'content-type': 'application/json'})
//     res.end(JSON.stringify({ 'message':'Hi you are visiting homepage'}));
// })

// server.listen(PORT, HOSTNAME, ()=>{
//     console.log(`Your server is Running on http://${HOSTNAME}:${PORT}`)
// })

const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('HI i am from Es6 Import statment using node js');
})

server.listen(PORT, HOSTNAME, ()=>{
    console.log(`your Server is listing on http://${HOSTNAME}:${PORT}`)
})