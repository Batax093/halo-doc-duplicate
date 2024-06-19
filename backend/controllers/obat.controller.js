import Obat from "../models/obat.models.js";

export const getObat = async (req, res) => {
    try {
        const obat = await Obat.find()
        res.status(200).json(obat)
    } catch (error) {
        console.log("Error while getting obat: ", error.message)
        res.status(500).json({ error: "Internal Server Error!" })
    }
}
