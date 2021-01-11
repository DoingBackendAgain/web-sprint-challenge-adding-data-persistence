// build your `/api/resources` router here
const express = require("express");
const db = require("../../data/dbConfig")
const model = require("./model")

const router = express.Router()

router.get("/", (req, res)=> {
    model.get()
        .then(resource => {
            res.json(resource)
        })
        .catch(err => {
            res.status(500).json({
                message: "failed"
            })
        })
});

router.get("/:id", (req, res)=> {

    model.getById(req.params.id)
        .then(resource => {
            res.json(resource)
        })
        .catch(err => {
            res.status(500).json({
                message: "failed"
            })
        })
})

router.post("/", (req, res)=> {
    id = req.params.id
    const resource = {...req.body, id:id}

    model.insert(resource)
        .then((resource) => {
            res.status(201).json(resource)
        })
        .catch((err)=> {
            res.status(500).json({
                message: "error inserting resource"
            })
        })
})



module.exports = router;