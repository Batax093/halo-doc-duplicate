import Peralatan from "../models/peralatan.model.js";  

export const getPeralatan = async (req, res) => {
    try {
        const peralatan = await Peralatan.find()
        res.status(200).json(peralatan)
    } catch (error) {
        console.log("Error while getting Peralatan: ", error.message)
        res.status(500).json({ error: "Internal Server Error!" })
    }
}