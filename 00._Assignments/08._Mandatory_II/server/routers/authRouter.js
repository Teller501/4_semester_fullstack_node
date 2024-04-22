import { Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const router = Router();

import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

const users = [];
const activations = {};
const saltRounds = 14;

function generateAccessToken(user) {
    return jwt.sign(user, process.env.JWT_SECRET, { expiresIn: "15m" });
}

async function sendActivationEmail(email, activationToken) {
    const activationLink = `http://localhost:5173/activate/${activationToken}`;
    const message = {
        from: "Admin <noreply@andersteller.dk>",
        to: email,
        subject: "Please activate your account",
        html: `<p>Thank you for signing up at Mandatory II. Please click the link below to activate your account:</p>
        <a href="${activationLink}">Activate account</a>`,
    };

    const { data, error } = await resend.emails.send(message);

    if (error) {
        console.error(error);
    }

    console.log(`Send this link to ${email}: ${activationLink}, ${data}`);
}

router.get("/api/activate/:token", (req, res) => {
    const token = req.params.token;
    const username = activations[token];

    if (!username) {
        return res.status(400).send({ error: "Invalid activation token" });
    }

    const user = users.find((user) => user.username === username);
    if (!user) {
        return res.status(400).send({ error: "User not found" });
    }

    user.isActive = true;
    delete activations[token];

    res.send({ data: "User activated" });
});

let refreshTokens = [];

router.post("/api/login", async (req, res) => {
    const user = users.find((user) => user.username === req.body.username);
    if (!user) {
        return res.status(400).send({ error: "User not found" });
    }

    if (!user.isActive) {
        return res.status(400).send({ error: "User not activated" });
    }

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            const token = generateAccessToken(user);
            const refreshToken = jwt.sign(user, process.env.JWT_REFRESH_SECRET);
            refreshTokens.push(refreshToken);
            res.send({ token: token, refreshToken: refreshToken, user: user });
        } else {
            res.status(400).send({ error: "Invalid password" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "An error occurred" });
    }
});

router.post("/api/signup", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            isActive: false,
        };
        const activationToken = crypto.randomBytes(32).toString("hex");

        users.push(user);
        activations[activationToken] = user.username;

        await sendActivationEmail(user.email, activationToken);

        console.log(users);
        res.status(201).send({ data: "User created" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "An error creating the user" });
    }
});

router.post("/api/token", (req, res) => {
    const refreshToken = req.body.token;
    if (!refreshToken) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        const token = generateAccessToken({ username: user.username });
        res.json({ token: token });
    });
});

router.delete("/api/logout", (req, res) => {
    refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
    res.sendStatus(204);
});

export default router;
