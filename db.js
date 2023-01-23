const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let database;
async function getDataBase(){
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017')
    database = client.db('library');
    if(!database){
        console.log("error")
    }
    return database
}

module.exports = {
    getDataBase
}