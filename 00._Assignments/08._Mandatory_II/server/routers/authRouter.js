import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();

const users = [];
const saltRounds = 14;

function generateAccessToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "15m" });
}

let refreshTokens = [];

router.post("/auth/login", async (req, res) => {
    const user = users.find((user) => user.username === req.body.username);
    if (!user) {
        return res.status(400).send("User not found");
    }

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = generateAccessToken(user);
            const refreshToken = jwt.sign(user, process.env.JWT_REFRESH_SECRET);
            refreshTokens.push(refreshToken);
            res.send({ token: token, refreshToken: refreshToken});
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

router.post("/auth/token", (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const token = generateAccessToken({ username: user.username });
        res.json({ token: token });
    });
});

router.delete("/auth/logout", (req, res) => {
    refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
    res.sendStatus(204);
});

export default router;
