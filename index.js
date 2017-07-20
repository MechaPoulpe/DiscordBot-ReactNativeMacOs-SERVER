const express = require('express');
const Discord = require('discord.js');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = 3000;
server.listen(port, () => {
  console.log('Server listening at port %d', port);
});


const client = new Discord.Client();
const userId = 'UOUR-USER-DISCORD-ID';
let isSocketReady = false;


client.on('ready', () => {
  console.log('SocketIO OK');
});

io.on('connection', () => {
  isSocketReady = true;
  console.log('Connection with app OK');
});

client.on('message', (message) => {
  // TODO
  // Add check on mention user id and defined user id
  if (isSocketReady) {
    io.emit('message', message.content);
  }
});

client.login('YOUR-BOT-TOKEN-HERE');
