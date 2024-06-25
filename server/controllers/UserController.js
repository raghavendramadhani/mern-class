import UserModel from "../Model/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const JWT_SECRET = "hfguhbjhvgyghjhvgygcftyhvfyuj";

export async function createUser(req, res) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists, please login" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await UserModel.create({ ...req.body, password: hashedPassword });

        return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const existingUser = await UserModel.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const checkPassword = await bcrypt.compare(password, existingUser.password);
        if (!checkPassword) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        const token = jwt.sign({ id: existingUser._id }, JWT_SECRET, { expiresIn: "1h" });
        return res.status(200).json({ message: "Login successful", token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function getMyDetails(req, res) {
    try {
        const userId = req.params.id;
        const existingUser = await UserModel.findById(userId).populate("MyBlogs");

        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ user: existingUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
