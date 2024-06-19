import Order from "../models/order.model.js"
import Obat from "../models/obat.models.js";
import Peralatan from "../models/peralatan.model.js";

export const addOrderObat = async (req, res) => {
    try {
        const { namaBarang, jummlah } = req.body;

        const namaObat = await Obat.findOne({ namaObat: namaBarang })

        if(!namaObat) return res.status(404).json({ error: "Obat tidak ada!"})
        
        const newOrder = Order.insertMany({
            namaObat,
            jummlah
        })

        await newOrder.save()

        res.status(201).json({newOrder})
    } catch (error) {
        console.log("Error while addding Obat: ", error.message)
        res.status(505).json({ error: "Internal Server Error!" })
    }
}

export const addOrderPeralatan = async (req, res) => {
    try {
        const { namaBarang, jummlah } = req.body;

        const namaPeralatan = await Peralatan.findOne({ namaPeralatan: namaBarang })

        if(!namaPeralatan) return res.status(404).json({ error: "Peralatan tidak ada!"})

        const newOrder = Order.insertMany({
            namaPeralatan,
            jummlah
        })

        await newOrder.save()

        res.status(201).json({newOrder})
    } catch (error) {
        console.log("Error ketika menambahkan Peralatan: ", error.message);
        res.status(505).json({ error: "Internal Server Error!" });
    }
}