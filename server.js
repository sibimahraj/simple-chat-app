// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(cors());

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('joinRoom', (contactId) => {
        socket.join(`room-${contactId}`);
        console.log(`User joined room-${contactId}`);
    });

    socket.on('sendMessage', (data) => {
        const { text, user, contactId } = data;
        io.to(`room-${contactId}`).emit('receiveMessage', { text, user, id: Date.now() });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
