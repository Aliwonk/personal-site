import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import path from 'path';
import { router } from './routers/router';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser('secret'));
app.use(express.static(path.resolve('../client/dist')));

app.use('/', router);

export { app };