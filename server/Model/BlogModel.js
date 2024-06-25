import mongoose from "mongoose";


const BlogSchema = new mongoose.Schema({
    tiile: {
        type: String,
        require: true
    },
    description: {
        type: String
    }, image: {
        type: String,
        require: true
    },
}, {
    timestamps: true
})


export default mongoose.model("blog", BlogSchema)