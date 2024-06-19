import User from "../models/auth.model.js";

export const getDetailUser = async (req, res) => {
    try {
        const { _id } = req.user
        const user = await User.findById(_id)
        res.status(200).json(user)
    } catch (error) {
        console.log("Error while getting user: ", error.message)
        res.status(500).json({ error: "Internal Server Error!" })
    }
}