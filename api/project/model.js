// build your `Project` model here

const db = require("../../data/dbConfig")

module.exports = {
    get,
    insert
};

function get(){
    return db("projects")
}

function insert(){

}