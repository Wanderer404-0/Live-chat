// server.js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static(__dirname + '/public'));

// Socket.io connection handling
io.on('connection', (socket) => {
    console.log('User connected');

    // Listen for incoming messages
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // Broadcast message to all connected clients
    });

    // Handle disconnection
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
