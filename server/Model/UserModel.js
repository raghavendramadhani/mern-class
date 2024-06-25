import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    MyBlogs: [{
        type: mongoose.Types.ObjectId,
        ref: "Blog" 
    }]
}, {
    timestamps: true
});

export default mongoose.model('User', UserSchema);
