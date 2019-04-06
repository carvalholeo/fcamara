var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://localhost:27017/pesquisa")
    .then(conn => global.conn = conn.db("pesquisa"))
    .catch(err => console.log(err));

function findAll(callback) {
    global.conn.collection("respostas").find({}).toArray(callback);
}

function insert(resposta, callback) {
    global.conn.collection("respostas").insertOne(resposta, callback);
}

function findOne(id, callback) {
    global.conn.collection("respostas").findOne({_id: new ObjectId(id)}, callback);
}

module.exports = { findAll, insert, findOne };