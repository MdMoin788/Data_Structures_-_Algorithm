const express = require("express")

const router = express.Router()
const Post =require("../model/post.model")



router.post("", async (req, res)=>{    //create a post route to create posts.
    try {

    const posts =await Post.create(req.body)
    return res.status(201).send(posts)
    }
    catch (err) {
    return res.status(500).send(err.message)

    }
})



// router.get("", async (req, res) => {
//     try {
//         const post = await Post.find().lean().exec()
//         return res.status(201).send(post)
//     }
//     catch (err) {
//         return res.status(500).send(err.message)
//     }
// })





router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).lean().exec()
        return res.status(201).send(post)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})

router.post("/update/:id", async (req, res) => { // a user can only update or delete his post.
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {new:true}).lean().exec()
        return res.status(201).send(post)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})


router.post("/delete/:id", async (req, res) => { // a user can only update or delete his post.
    try {
        const post = await Post.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(201).send(post)
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})


router.get("", async (req, res) => { // to see min 10 post at time for user 
    try {

        const page = req.query.page || 1
        const size = req.query.size || 10

        const post = await Post.find().skip((page-1)*size).limit(size)
        // console.log('post', post);
        const totalPage = Math.ceil(await Post.find().countDocuments()/size)
        console.log('totalPage', totalPage);
     

        return res.status(201).send({post, totalPage})
    }
    catch (err) {
        return res.status(500).send(err.message)
    }
})




module.exports= router