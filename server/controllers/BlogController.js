import BlogModel from "../Model/BlogModel.js";
import UserModel from "../Model/UserModel.js";

export async function CreateBlog(req, res) {
    try {
        const { title, description, image } = req.body;

        if (!title || !image) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await UserModel.findById(req.params.id);
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const newBlog = await BlogModel.create({
            title,
            description,
            image,
        });

        existingUser.MyBlogs.push(newBlog._id);
        await existingUser.save();

        return res.status(200).json({ message: "Blog created successfully" });
    } catch (error) {
        console.error("Error creating blog:", error);
        return res.status(500).json({ message: "Server error" });
    }
}
