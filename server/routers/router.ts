import * as express from 'express';
import path from 'path';
import * as controllerMainPage from '../controllers/mainPage';
import { admin } from './admin';
import { api } from './api';
 
const router = express.Router();

// main page 
router.route('')
.get(controllerMainPage.htmlFile)
.post((req: express.Request, res: express.Response) => {
    controllerMainPage.statistic(req, res);
    controllerMainPage.callBack(req, res);
});

// admin route
router.use('/admin', admin);


// api route
router.use('/api', api);

export {router};