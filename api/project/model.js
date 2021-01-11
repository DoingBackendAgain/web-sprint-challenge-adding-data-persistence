// build your `Project` model here

const db = require("../../data/dbConfig")

module.exports = {
    get,
    getById,
    insert,
    getTaskDetails
};

function get(){
    return db("projects")
}

function getById(id){
    return db("projects")
        .where({id})
        .first();
}

function insert(project){
    return db("projects")
        .insert(project)
        .then(ids => {
            return getById(ids[0])
        })
}

function getTaskDetails(id){
    return db("tasks")
        .innerJoin("projects", "projects.id", "tasks.project_id")
        .where("tasks.project_id", id)
        .select("tasks.*", "projects.*")
}

