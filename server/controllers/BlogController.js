import BlogModel from "../Model/BlogModel.js"
import UserModel from "../Model/UserModel.js"

export async function CreateBlog(req, res) {
    try {
        const { title, descrition, image } = req.body
        const ExistingUser = await UserModel.findById(req.params.id)
console.log(ExistingUser)
        if (!title || !image) {
            return res.status(400).json({ message: "Feilds are reuired" })
        }
        const NEWBLOG = await BlogModel.create(req.body)
        await ExistingUser.MyBlogs.push(NEWBLOG._id)
        return res.status(200).json({ message: "" })
    } catch (error) {
        console.log(error)
    }
}