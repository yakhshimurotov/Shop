import express from "express";
import {create} from "express-handlebars";
import ProductsRouter from "./routes/products.js";
import AouthsRouter from "./routes/auths.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const hbs = create({
    defaultLayout: "main",
    extname: "hbs"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");

app.use(express.urlencoded({extended: true}))
app.use(ProductsRouter);
app.use(AouthsRouter);
app.use(express.static("public"));

const appStart = () => {
    try {
        const PORT = process.env.PORT || 2000;
        app.listen(PORT, () => {
            console.log(`Server is running...${PORT}`);
        });

        mongoose.connect(process.env.MONGO_URL,)
        .then(() => {
            console.log("MongoDB connected...");
        }).catch((error) => {
            console.error("MongoDB connection error:", error);
        })
    } catch (error) {
        console.error("Xatolik yuz berdi", error);
        throw error;
    }
};

appStart();
