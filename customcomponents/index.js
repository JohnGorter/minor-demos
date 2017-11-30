var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static("."));

var clientconnected = false;
io.on('connection', function(socket){
    console.log('connected from client');
    clientconnected = true;
});

http.listen(3080, function(){
  console.log('listening on *:3000');
});


setInterval(() => {
    console.log('shall we send?');
    if (clientconnected){
        console.log('send message...');
        io.emit("message", "a new message at " + new Date());
    }
}, 500); 