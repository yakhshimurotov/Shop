import { Router } from "express";
const router = Router();

router.get("/login", (req, res) => {
    res.render("login", {
        title: "Shop | Login",
        isLogin: "true"
    });
});

router.get("/sign-up", (req, res) => {
    res.render("sign-up", {
        title: "Shop | Sign-up",
        isSignUp: "ture"
    });
});

router.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

router.post("/sign-up", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});

export default router;