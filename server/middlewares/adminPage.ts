import * as express from 'express';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import { getData } from '../database/mongo';

dotenv.config({path : './.env'});

const jwtKey: string = process.env.JWTKEY!;
// CHECK TOKEN
export function checkToken(req: express.Request, res: express.Response, next: express.NextFunction) {
    // get cookie
    if(!req.cookies.adn) {
        return res.redirect('/admin/signin');
    }else{

        // check token
        jwt.verify(req.cookies.adn, jwtKey, (err: any, decoded: any) => {
            if(err) return res.sendStatus(500);

            getData('personal-site', 'admin', (error: any, result: any) => {
                if(error) return res.sendStatus(500);

                if(decoded.login === result[0].login && decoded.password === result[0].password) {

                    next();

                }else{

                    res.redirect('/admin/signin');

                }
            });
        });
        // end check token
    }

    // end get cookie
};
// END CHECK TOKEN