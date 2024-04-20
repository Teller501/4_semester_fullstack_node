import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();



const users = [];
const saltRounds = 14;

router.post("/auth/login", async (req, res) => {
    const user = users.find((user) => user.username === req.body.username);
    if (!user) {
        return res.status(400).send("User not found");
    }

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign({ user }, process.env.JWT_SECRET);
            res.send({ data: token });
        } else {
            res.status(400).send("Invalid password");
        }

    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred");
    }

});

router.post("/auth/signup", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        };
        users.push(user);
        console.log(users);
        res.status(201).send("User created");
    } catch (error) {
        console.error(error);
        res.status(500).send("An error creating the user");
    }
});

export default router;
