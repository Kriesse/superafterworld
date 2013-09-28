var express = require("express");
var app = express();
app.use(express.logger());
app.use(express.static('public'));
app.use(app.router);

var port = process.env.PORT || 5000;
var socket = app.listen(port, function() {
    console.log("Listening for http on " + port);
});

var io = require('socket.io').listen(socket);
io.sockets.on('connection', function (socket) {
  socket.on('mario_died', function (data) {
    io.sockets.emit('add_mario', data);
  });
});
