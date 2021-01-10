// build your `Project` model here

const db = require("../../data/dbConfig")

module.exports = {
    get,
    getById,
    insert
};

function get(){
    return db("projects")
}

function getById(id){
    return db("projects")
        .where({id})
        .first();
}

function insert(){

}