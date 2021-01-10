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

router.get("/:id", (req, res, next)=> {
    model.getById(req.params.id)
        .then(project => {
            res.json(project)
        })
        .catch(err =>{
            next(err)
        })
});



module.exports = router;