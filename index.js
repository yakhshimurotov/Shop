import express from "express";
import {create} from "express-handlebars";
import ProductsRouter from "./routse/products.js";
import AouthsRouter from "./routse/auths.js";
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

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
    console.log(`Server is running...${PORT}`);
});