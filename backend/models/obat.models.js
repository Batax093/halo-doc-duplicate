import mongoose from "mongoose";

const obatSchema = new mongoose.Schema({
    namaObat : {
        type: String,
        required: true
    },
    jenisObat: {
        type: String,
        required: true
    },
    keterangan: {
        type: String,
        required: true
    }
})

const Obat = mongoose.model("Obat", obatSchema);

export default Obat