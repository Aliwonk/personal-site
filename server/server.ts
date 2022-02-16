import http from 'http';
import dotenv  from 'dotenv';
import fs from 'fs';
import { app } from './app';
import { Server } from 'socket.io';

dotenv.config({path : './.env'});

// CONFIG
const server = http.createServer(app),
io = new Server(server);

let clients: number = 0;
io.on('connection', (socket) => {
    clients++;
    io.sockets.emit('online', clients);
    socket.on('mess', message => {
        io.sockets.emit('message', message);    
    });

    socket.on('disconnect', () => {
        clients--;
        io.sockets.emit('online', clients);
    });
});

// LISTEN
const PORT = process.env.PORT;
server.listen(PORT);
server.on('listening', () => {
    console.info(`Listening on port: ${PORT}`);
});

export { server }
