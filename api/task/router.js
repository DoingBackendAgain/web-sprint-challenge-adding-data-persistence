// build your `/api/tasks` router here
const express = require("express");
const db = require("../../data/dbConfig")
const model = require("./model")

const router = express.Router()

router.get("/", (req,res) => {
    model.get()
        .then(task => {
            res.json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: "failed"
            })
        })
})


router.get("/:id", (req, res)=> {
    model.getById(req.params.id)
        .then(task => {
            res.json(task)
        })
        .catch(err => {
            res.status(500).json({
                message: "failed"
            })
        })
})


module.exports = router;