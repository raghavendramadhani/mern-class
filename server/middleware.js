import jwt from "jsonwebtoken"

const JWT_SECRET = "hfguhbjhvgyghjhvgygcftyhvfyuj";


export default function verifyToken(req, res, next) {
    try {
        const GetToken = req.headers["token"]
        const decoded = jwt.verify(GetToken, JWT_SECRET);
        req.userId = decoded.id
        next()
    } catch (error) {
        console.log(error)
    }
}