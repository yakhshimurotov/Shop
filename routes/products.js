import { Router } from "express";
const router = Router();


router.get("/", (req, res) => {
    res.render("index", {
        title: "Shop | Home"
    });
});

router.get("/products", (req, res) => {
    res.render("products", {
        isProducts: "true"
    });
});

router.get("/add", (req, res) => {
    res.render("add", {
        isAdd: "true"
    });
});

export default router;
