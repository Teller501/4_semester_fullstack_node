import "dotenv/config";
import express from 'express';

const app = express();

app.use(express.json());

import authRouter from './routers/authRouter.js';
app.use(authRouter);

import { rateLimit } from 'express-rate-limit'
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, 
	limit: 100,
	standardHeaders: 'draft-7',
	legacyHeaders: false, 
})

app.use(limiter)

const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 4,
    standardHeaders: "draft-7",
    legacyHeaders: false,
});

app.use("/auth", authRateLimiter);

import authenticateToken from "./util/authenticateToken.js";

const shoppingList = [
	{ user: "teller", items: ["milk", "bread", "eggs"] },
	{ user: "joe", items: ["butter", "cheese", "ham"] },
	{ user: "jane", items: ["apples", "bananas", "oranges"] },
];

app.get("/api/shoppinglist", authenticateToken, (req, res) => {
	res.send({ data: shoppingList.filter((list) => list.user === req.user.username) });
});



const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));