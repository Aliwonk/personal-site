import express from 'express'
import path from 'path';
import { insertData, mongoclient } from '../database/mongo';
import { sendGmailer } from '../modules/mailer';

// GET

    // html file main page
export function htmlFile(req: express.Request , res: express.Response) {
    res.sendFile(path.resolve('../client/dist/main.html'));
};

// END GET


// POST

    // send data callback client
export function callBack(req: express.Request, res: express.Response) {
    if(!req.body) return res.sendStatus(400);

    if(req.body.clientEmail && req.body.clientName) {

        // send client data on gmail
        sendGmailer({
            from: req.body.clientEmail,
            to: 'aidysh0324@gmail.com',
            subject: 'Клиенты с сайта',
            html: `
            <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width"/>

                <!-- For development, pass document through inliner -->

                <style type="text/css">

                    * { margin: 0; padding: 0; font-size: 100%; font-family: 'Avenir Next', "Helvetica Neue", "Helvetica", Helvetica, Arial, sans-serif; line-height: 1.65; }

                    img { max-width: 100%; margin: 0 auto; display: block; }

                    body, .body-wrap { width: 100% !important; height: 100%; background: #f8f8f8; }

                    a { color: #71bc37; text-decoration: none; }

                    a:hover { text-decoration: underline; }

                    .text-center { text-align: center; }

                    .text-right { text-align: right; }

                    .text-left { text-align: left; }

                    .button { display: inline-block; color: white; background: #71bc37; border: solid #71bc37; border-width: 10px 20px 8px; font-weight: bold; border-radius: 4px; }

                    .button:hover { text-decoration: none; }

                    h1, h2, h3, h4, h5, h6 { margin-bottom: 20px; line-height: 1.25; }

                    h1 { font-size: 32px; }

                    h2 { font-size: 28px; }

                    h3 { font-size: 24px; }

                    h4 { font-size: 20px; }

                    h5 { font-size: 16px; margin-bottom: 0px; }

                    p, ul, ol { font-size: 16px; font-weight: normal; margin-bottom: 20px; }

                    .container { display: block !important; clear: both !important; margin: 0 auto !important; max-width: 580px !important; }

                    .container table { width: 100% !important; border-collapse: collapse; }

                    .container .masthead { padding: 20px 0; background: white; color: black; }

                    .container .masthead h1 { margin: 0 auto !important; max-width: 90%; text-transform: uppercase; }

                    .container .content { background: white; padding: 30px 35px; }

                    .container .content p {margin-top: 0px; margin-bottom: 0px;}

                    .container .content.footer { background: none; }

                    .container .content.footer p { margin-bottom: 0; margin-top: 20px; color: #888; text-align: center; font-size: 14px; }

                    .container .content.footer a { color: #888; text-decoration: none; font-weight: bold; }

                    .container .content.footer a:hover { text-decoration: underline; }

                </style>
            </head>
            <body>
            <table class="body-wrap">
                <tr>
                    <td class="container">

                        <!-- Message start -->
                        <table>
                            <tr>
                                <td align="center" class="masthead">

                                    <h2 style="margin-bottom: 0px;">Personal site</h2>

                                </td>
                            </tr>
                            <tr>
                                <td class="content">
                                    <h4>Клиенты</h4>

                                    <p>Имя: ${req.body.clientName}</p>
                                    <p style="margin-top: 0px;">Email: ${req.body.clientEmail}</p>
                                    
                                    <p style="margin-bottom: 0px; margin-top: 20px;">Сообщение: </p>
                                    <p style="margin-top: 5px;">
                                        ${req.body.clientMessage}
                                    </p>

                                </td>
                            </tr>
                        </table>

                    </td>
                </tr>
            </table>
            </body>
            </html>
            `
        });

        // answer on ajax
        res.status(200)
        res.setHeader('Content-type', 'text/html');
        res.end('Callback ok');
    };
};


    // send data statistic visit site
export function statistic(req: express.Request, res: express.Response) {
    if(!req.body) return res.sendStatus(400);

    if(req.body.statistic) {
        insertData('personal-site', 'statistics', [req.body.statistic], (err: any, result: any) => {
            if(err) return console.error(err);
            
        });
        res.status(200);
        res.end();
    }
};

// END POST