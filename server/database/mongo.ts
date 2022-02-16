import * as mongodb from 'mongodb';
import * as dotenv from 'dotenv';

dotenv.config({path : './.env'});

let url = process.env.MONGOURL!;
export const mongoclient = new mongodb.MongoClient(url);


// INSERT
export function insertData(dbName: string, collection: string, data: any, callback: any) {
    mongoclient.connect((err, client) => {
        if(err) return console.error(err);

        const db = client?.db(dbName),
        coll = db?.collection(collection);

        coll?.insertMany(data, (error, result) => {
            if(error) return callback(new Error(`Mongo insert fail error: ${error}`));

            callback(null, result)
        });
    });
}
// END INSERT

// GET
export function getData(dbName: string, collection: string, callbcak: any){
    mongoclient.connect((err, client) => {
        if(err) return console.log(err);

        const db = client?.db(dbName).collection(collection);

        db?.find().toArray((error, result: any) => {
            if(error) return callbcak(new Error(`error get data mongo ${error}`));

            callbcak(null, result);
        });

    });
};
// END GET

// DELETE
export function delData(dbName: string, collection: string, many: string, options: object, callback: any) {
    mongoclient.connect((err, client) => {
        if(err) return console.log(err);

        const db = client?.db(dbName).collection(collection);
        if(many === 'one') {
        
            db?.deleteOne(options, (error, result) => {
                if(error) return callback(new Error(`error delete data mongo ${error}`));

                callback(null, result);
            });
        
        };
        if (many === 'many') {

            db?.deleteMany(options, (error, result) => {
                if(error) return callback(new Error(`error delete data mongo ${error}`));

                callback(null, result);
            });

        };
        if(many === 'all') {

            db?.drop(options, (error, result) => {
                if(error) return callback(new Error(`error delete data mongo ${error}`));

                callback(null, result);
            });

        };
    });
}
// END DELETE