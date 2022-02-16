import * as express from 'express';
import path from 'path';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import * as mongo from '../database/mongo';
import { ObjectId } from 'mongodb';

dotenv.config({path : './.env'});
const jwtKey: string = process.env.JWTKEY!;


// MAIN PAGE ADMIN

    // get
export function adminFile(req: express.Request, res: express.Response) {
    res.sendFile(path.resolve('../client/dist/admin.html'));
};
    // end get
    

    // delete
    export function deleteStatistic(req: express.Request, res: express.Response) {
        if(req.params.id) {
            let id:string = req.params.id;
            console.log(req.params.id);
            mongo.delData('personal-site', 'statistics', 'one', {_id: new ObjectId(id)}, (err: any, result: any) => {
                if(err) return console.log(err);
                
                console.log('Delete succefully');
    
                console.log(result);
            });
            res.status(200);
            res.setHeader('Content-type', 'text/html');
            res.end('ok');
        };
    };
        // end delete
// END MAIN PAGE


// AUTH PAGE

    // get
export function signInFile(req: express.Request, res: express.Response) {
    res.set({
        'Cache-Control' : 'no-cache'
    });
    res.sendFile(path.resolve('../client/dist/adminSignIn.html'));
};
    // end get

    // post
export function signIn(req: express.Request, res: express.Response) {
    if(!req.body) return res.sendStatus(400);

        // admin data
    let login: string = req.body.adminLogin;
    let password: string = req.body.adminPassword;

        // get data mongo
    mongo.getData('personal-site', 'admin', (err: any, result: any) => {
        if(err) return console.log(err);

        // check data admin
        if(login === result[0].login && password === result[0].password) {

            // create token
            const token = jwt.sign({
                login: result[0].login,
                password: result[0].password
            }, jwtKey, {expiresIn : '1h'});

            // send token to cookie
            res.cookie('adn', token, {path: '/admin', maxAge : 1000 * 300});
            res.redirect('/admin');
        
        }else{

            res.sendStatus(401);

        }
            // end check data admin

    });
        // end get data mongo
};
    // end post
// END AUTH PAGE