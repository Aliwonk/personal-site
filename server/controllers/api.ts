import express from 'express';
import { getData } from "../database/mongo";

export class Admin {

    // get data admin from mongodb and send in path /api/admin/auth
    adminAuth(req: express.Request, res: express.Response) {
        getData('personal-site', 'admin', (err: Error, data: any) => {
            if(err) return res.sendStatus(500).send(err);

            res.send(data);

        });
    };

    // get statistics site from mongodb and send in path /api/admin/statistic
    adminStatistic(req: express.Request, res: express.Response) {

        getData('personal-site', 'statistics', (err: Error, statistics: any) => {
            if(err) return res.sendStatus(500).send(err);

            res.send(statistics);
        });

    };

};