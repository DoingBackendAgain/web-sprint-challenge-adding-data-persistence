// build your `/api/projects` router here
const express = require("express");
const db = require("../../data/dbConfig")
const model = require("./model")

const router = express.Router()

router.get("/", (req, res, next) => {
   model.get()
    .then(source => {
        res.json(source)
    })
    .catch(err => {
        res.status(500).json({
            message: "failed"
        })
    })
});



module.exports = router;