import http from 'http';
import dotenv  from 'dotenv';
import fs from 'fs';
import { app } from './app';

dotenv.config({path : './.env'});

// CONFIG
const server = http.createServer(app);

// LISTEN
const PORT = process.env.PORT;
server.listen(PORT);
server.on('listening', () => {
    console.info(`Listening on port: ${PORT}`);
});

export { server }
