import { Router } from "express";
import escape from "escape-html";

const router = Router();

const messages = [];

router.get("/messages", (req, res) => {
    res.send({ data: messages });
});

router.post("/messages", (req, res) => {
    messages.push(escape(req.body.messages));

    res.send({ data: messages });
});

export default router;
