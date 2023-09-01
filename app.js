const express = require('express')
const app = express()
const path = require('path')
const http =require('http')
const WebSocket = require('ws')

// websocket server 
const server = http.createServer(app)

const ws = new WebSocket.Server({server:server})
// console.log(ws);

ws.on('connection', (ws)=>{
  console.log('web socket server created!!');
  // receiving message from client
  ws.on('message', (message)=> {
    console.log('received message from client: %s', message);
    // now send response to the client 
    ws.send('price updated successfully ' + message);
});

});
// home page  
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"src","index.html"))
  })
 
// single item page
app.get('/task2',(req,res)=>{
    res.sendFile(path.join(__dirname,"src","task2.html"))
}) 

  server.listen(8000,()=>{
    console.log("Server listen on port localhost : 8000");
  })