import bcrypt from "bcryptjs"

import User from "../models/auth.model.js"
export const signup = async (req, res) => {
    try {
        const { userName, email, password } = req.body
        
        const user = await User.findOne({ email })

        if(user){
            return res.status(401).json({ error: "User already exists!"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            userName,
            email,
            password: hashedPassword,
        })

        if(newUser){
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
            })
        } else {
            res.status(401).json({ error: "Invalid user data!"})
        }
    } catch (error) {
        console.log("Error while signing up", error.message)
        return res.status(500).json({ error: "Internal Server Error! "})
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "")

        if(!user || !isPasswordCorrect){
            return res.status(401).json({ error: "Invalid credentials!"})
        }

        res.status(201).json({
            _id: user._id,
            fullName: user.fullName,
            email: user.email,
        })
    } catch (error) {
        console.log("Error while signing up", error.message)
        res.status(500).json({ error: "Internal Server Error!"})
    }
}

export const logout = (req, res) => {
    try {
        res.status(201).json({ message: "Logout Successful!"})
    } catch (error) {
        console.log("Error while signing up", error.message)
        return res.status(500).json({ error: "Internal Server Error!"})
    }
}