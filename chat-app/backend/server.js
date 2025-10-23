const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const users = new Map();

io.on('connection', (socket) => {
  console.log(`New client connected: ${socket.id}`);

  socket.on('join', (data) => {
    users.set(socket.id, data.username);
    console.log(`${data.username} joined`);
    
    io.emit('message', {
      username: 'System',
      text: `${data.username} joined the chat`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isSystem: true,
    });
  });

  socket.on('send_message', (data) => {
    io.emit('message', data);
  });

  socket.on('disconnect', () => {
    const username = users.get(socket.id);
    users.delete(socket.id);
    console.log(`${username} disconnected`);
    
    if (username) {
      io.emit('message', {
        username: 'System',
        text: `${username} left the chat`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isSystem: true,
      });
    }
  });

  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });
});

server.listen(3000, () => {
  console.log('Socket.IO server running on http://localhost:3000');
});