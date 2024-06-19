import express from "express";
import dotenv  from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectDB from "./config/connectDB.js";

import useAuth from "./routes/auth.routes.js";
import useObat from "./routes/obat.routes.js";
import useOrder from "./routes/order.routes.js";
import usePeralatan from "./routes/peralatan.routes.js";
import useUser from "./routes/user.routes.js";


const app = express();

dotenv.config()

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(cookieParser())


app.use("/api/auth", useAuth)
app.use("/api/obat", useObat)
app.use("/api/order", useOrder)
app.use("/api/peralatan", usePeralatan)
app.use("/api/user", useUser)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port ${PORT}`)
})
