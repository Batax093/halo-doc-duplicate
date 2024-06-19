import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    namaBarang: {
        type: String,
        required: true
    },
    jumlah: {
        type: Number,
        required: true
    }
})

const Order = mongoose.model("Order", orderSchema);

export default Order