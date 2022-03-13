const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema(
    {
        body: { type: String, required: false },
        likes: { type: Number, required: true, default: 0 },
        img: [{ type: String, required: true },],
        user_id :{type:mongoose.Schema.Types.ObjectId, ref : "user", required:true}
    }
    , {
        versionKey: false,
        timestamps: true
    }
)
const Post = mongoose.model("posts", PostSchema)
module.exports = Post



