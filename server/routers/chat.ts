import express from 'express';
import path from 'path';

const chat = express.Router();

// MAIN PAGE
chat.get('', (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve('../client/dist/chat.html'));
});

export { chat };