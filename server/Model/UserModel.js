import mongoose from "mongoose";

const schema = mongoose.Schema()

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
    }
})

export default mongoose.model("users", UserSchema)