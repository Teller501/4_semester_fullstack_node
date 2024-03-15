import { Router } from "express";

const router = Router();

router.get("/api/greeting", (req, res) => {
    const providedName = req.query.name;

    res.send({ data: `hello ${providedName}` });
});

export default router;
