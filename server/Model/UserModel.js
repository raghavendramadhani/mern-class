import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    }, email: {
        type: String,
        require: true,
        unique: true
    }, password: {
        type: String,
        require: true
    },
    MyBlogs: {
        type: mongoose.Types.ObjectId,
        ref: "blog"
    }
})

export default mongoose.model("users", UserSchema)