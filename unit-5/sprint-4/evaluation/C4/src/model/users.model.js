const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true },
        last_name: { type: String, required: true },
        age: { type: Number, required: true },
        email: { type: String, required: true },
        profile_img: [{ type: String, required: true },]
    }
    , {
        versionKey: false,
        timestamps: true
    }
)
const User = mongoose.model("user", UserSchema)
module.exports = User