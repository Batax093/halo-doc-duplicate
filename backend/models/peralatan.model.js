import mongoose from "mongoose";

const peralatanSchema = new mongoose.Schema({
    namaPeralatan : {
        type: String,
        required: true
    },
    tipePeralatan: {
        type: String,
        required: true
    }
})

const Peralatan = mongoose.model("Peralatan", peralatanSchema);

export default Peralatan