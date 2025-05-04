import { Router } from "express";
import User from "../models/user.js";
const router = Router();

router.get("/login", (req, res) => {
    res.render("login", {
        title: "Shop | Login",
        isLogin: "true"
    });
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        req.flash("Login", "Please fill all the fields");
        res.redirect("/login");
        return;
    };
    console.log(req.body);
    res.redirect("/");
});
// Login


// SignUp
router.get("/sign-up", (req, res) => {
    res.render("sign-up", {
        title: "Shop | Sign-up",
        isSignUp: "true",
        Signup: req.flash("Signup"),
    });
});

router.post("/sign-up", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    if(!firstName || !lastName || !email || !password) {
        req.flash("Signup", "Please fill all the fields");
        res.redirect("/sign-up");
        return;
    };
    const userName = await User.findOne({firstName});
    if(userName) {
        req.flash("Signup", "User already exists with this name");
        res.redirect("/sign-up");
        return;
    };
    const userLastName = await User.findOne({lastName});
    const userEmail = await User.findOne({email});
    if(email) {
        req.flash("Signup", "User already exists with this email");
        res.redirect("/sign-up");
        return;
    };
    const userPassword = await User.findOne({password});
    if(password) {
        req.flash("Signup", "User already exists with this password");
        res.redirect("/sign-up");
        return;
    };

    const UserData = ({
        firstName,
        lastName,
        email,
        password
    });
    const user = await User.create(UserData); 

    res.redirect("/");
});

export default router;