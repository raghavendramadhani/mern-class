import UserModel from "../Model/UserModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const JWT_SECRET = "hfguhbjhvgyghjhvgygcftyhvfyuj"
export async function CreareUser(req, res) {
    try {
        const { name, email, password } = req.body
        const ExistingUser = await UserModel.findOne({ email })
        if (!name || !email || !password) {
            return res.status(404).json({ message: "All values are required" })
        }
        const hashpassword = bcrypt.hashSync(password)
        if (ExistingUser) {
            return res.status(404).json({ message: "Please login" })
        }
        await UserModel.create({ ...req.body, password: hashpassword })

        return res.status(200).json({ message: "User is created suuccesfully" })
    } catch (error) {
        console.log(error)
    }
}

export async function Login(req, res) {
    try {
        const { email, password } = req.body
        const ExistingUser = await UserModel.findOne({ email })
        const checkPassword = bcrypt.compareSync(password, ExistingUser.password)

        if (!ExistingUser) {
            return res.status(400).json({ message: "No user found" })

        } else if (password !== ExistingUser.password) {
            return res.status(400).json({ message: "Incorrect password" })

        } else if (!checkPassword) {
            return res.status(400).json({ message: "Incorrect password" })
        }
        const token = jwt.sign({ id: ExistingUser._id, JWT_SECRET, epxpiresIn: "10m" })
        return res.status(200).json({ message: "Login successfully", ExistingUser })

    } catch (error) {
        console.log(error)
    }
}

export async function GetMydetails(req, res) {
    try {
        const ExistingUser = await UserModel.findById(req.params.id)
        if (!ExistingUser) {
            return res.status(400).json({ message: "No user" })
        }
        return res.status(200).json({ ExistingUser })

    } catch (error) {
        console.log(error)
    }
}