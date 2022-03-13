const express = require("express")
const router = express.Router()
const Comment = require("../model/coment.model")
router.post("", async (req, res) => {   //- create a post route to create comments.
    try {
        const comment = await Comment.create(req.body)
        return res.status(201).send(comment)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})


router.get("", async (req, res) => {
    try {
        const comment = await Comment.find().lean().exec()
        return res.status(201).send(comment)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})
module.exports = router