import UserModel from "../Model/UserModel.js"
import bcrypt from "bcrypt"

export async function CreareUser(req, res) {
    try {
        const { name, email, password } = req.body
        const ExistingUser = await UserModel.findOne({ email })
        if (!name || !email || !password) {
            return res.status(404).json({ message: "All values are required" })
        }
        if (ExistingUser) {
            return res.status(404).json({ message: "Please login" })
        }
        await UserModel.create(req.body)

        return res.status(200).json({ message: "User is created suuccesfully" })
    } catch (error) {
        console.log(error)
    }
}

export async function Login(req, res) {
    try {
        const { email, password } = req.body
        const ExistingUser = await UserModel.findOne({ email })

        if (!ExistingUser) {
            return res.status(400).json({ message: "No user found" })

        } else if (password !== ExistingUser.password) {
            return res.status(400).json({ message: "Incorrect password" })

        }
        return res.status(200).json({ ExistingUser })

    } catch (error) {
        console.log(error)
    }
}