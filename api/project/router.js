// build your `/api/projects` router here
const express = require("express");
const db = require("../../data/dbConfig")
const model = require("./model")

const router = express.Router()

router.get("/", (req, res, next) => {
   model.get()
    .then(project => {
        res.json(project)
    })
    .catch(err => {
        res.status(500).json({
            message: "failed"
        })
    })
});

router.post("/", (req, res)=> {
    id = req.params.id
    const project = {...req.body, id:id}

    model.insert(project)
        .then((project) => {
            res.status(201).json(project)
        })
        .catch((err)=> {
            res.status(500).json({
                message: "error getting data"
            })
        })
});



router.get("/:id", (req, res, next)=> {
    model.getById(req.params.id)
        .then(project => {
            res.json(project)
        })
        .catch(err =>{
            next(err)
        })
});

router.get("/:id/tasks", (req,res) => {
    model.getTaskDetails(req.params.id)
        .then(task => {
            res.json(task)
        })
        .catch(err => {
            next(err)
        })
})



module.exports = router;