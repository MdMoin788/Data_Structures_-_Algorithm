const mongoose = require("mongoose")
const commenSchema = new mongoose.Schema(
    {
        post_id: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
        user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
        body: { type: String, required: true },


    }
    , {
        versionKey: false,
        timestamps: true
    }
)
const Comment = mongoose.model("comment", commenSchema)
module.exports = Comment




