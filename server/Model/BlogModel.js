import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Blog', BlogSchema);
