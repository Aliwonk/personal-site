import nodemail from 'nodemailer'
import dotenv from 'dotenv';

dotenv.config({path : './.env'});

// CONFIG FOR GMAIL
let guser: string = process.env.GUSER!,
gpass: string = process.env.GPASS!;

let gtransporter = nodemail.createTransport({
    service : 'gmail',
    auth : {
        user : guser,
        pass : gpass
    }
});
// END CONFIG FOR GMAIL

type gmailOptions = {
    from: string,
    to: string,
    subject: string,
    text?: string
    html?: any,
    amp?: any
};

// SEND DATA GMAIL
function sendGmailer(data: gmailOptions) {
    gtransporter.sendMail(data, err => {
        if(err) return console.log(err);
    });
};
//END SEND DATA GMAIL

export { sendGmailer }