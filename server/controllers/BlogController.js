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

export async function AllBlogs(req, res) {
    try {
        const Blogs = await BlogModel.find({})
        return res.status(200).json({ Blogs })
    } catch (error) {
        console.log(error)
    }
}

export async function UpdateBlog(req, res) {
    try {
        const Upadate = await BlogModel.findByIdAndUpdate(req.params.id, req.body)
        await Upadate.save()
        return res.status(200).json({ message: "Blog is updated successfully" })
    } catch (error) {
        console.log(error)
    }
}

export async function DleteBlog(req, res) {
    try {
        const DeleteBlog = await BlogModel.findByIdAndDelete(req.params.id)
        if (!DeleteBlog) {
            return res.status(400).json({ message: "No blog found to delete" })
        }
        return res.status(200).json({ message: 'Deleted successfully' })
    } catch (error) {
        console.log(error)
    }
}