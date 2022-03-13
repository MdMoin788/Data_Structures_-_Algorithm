const express = require("express")
const app = express()
const connect = require("./src/config/db")
const userController = require("./src/controller/users.controller")
const postController = require("./src/controller/post.controller")
const likesController = require("./src/controller/likes.controller")
const commentController = require("./src/controller/comment.controoler")



app.use(express.json())
app.use("/users", userController)
app.use("/posts", postController)
app.use("/likes", likesController)
app.use("/comments", commentController)



app.listen(2345, async () => {
    try {
        await connect()
        console.log("Listining on port 2345")
    }
    catch (err) {
        console.log(err.message)
    }
})