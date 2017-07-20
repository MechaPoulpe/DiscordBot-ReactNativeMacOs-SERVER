var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = 3000;
server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

const Discord = require('discord.js');
const client = new Discord.Client();
var isSocketReady = false;
client.on('ready', () => {
  console.log('Im ready dude!');
});

io.on('connection', function (socket) {
  isSocketReady = true;
  console.log('SocketIO READY')
});

    client.on('message', message => {
        console.log(message);
        if(isSocketReady) {
          io.emit('message', message.content)
        }
    });

client.login('MjkzMDI0MzM1OTA2NDcxOTM2.DFISpw.QM3KouMo4FOwLsmdZxFpAfjWwS8');