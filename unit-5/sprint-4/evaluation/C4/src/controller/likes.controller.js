const express = require("express")

const router = express.Router()
const Likes =require("../model/likes.model")



router.post("", async (req, res)=>{  
    try {

    const likes =await Likes.create(req.body)
    return res.status(201).send(likes)
    }
    catch (err) {
    return res.status(500).send(err.message)

    }
})



router.get("", async (req, res)=>{  
    try {

    const likes =await Likes.find().lean().exec()


    return res.status(201).send(likes)
    }
    catch (err) {
    return res.status(500).send(err.message)

    }
})




module.exports= router