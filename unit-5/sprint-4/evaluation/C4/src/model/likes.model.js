const mongoose = require("mongoose")
const likesSchema = new mongoose.Schema(
    {
        post_id: { type:mongoose.Schema.Types.ObjectId, ref : "post", required:true},
        user_id: {type:mongoose.Schema.Types.ObjectId, ref : "user", required:true},
    }
    , {
        versionKey: false,
        timestamps: true
    }
)
const Likes = mongoose.model("like", likesSchema)
module.exports = Likes





// - PostLike Model
// - postId ( references post collection)
// - userId ( references user collection)