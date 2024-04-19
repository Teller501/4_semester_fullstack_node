import { Router } from "express";

const router = Router();

const eclipseMovies = [
    {
        id: 1,
        title: "One flew over the cockoos nest",
        director: "Milos",
        year: 1971,
    },
    {
        id: 2,
        title: "The big lebowski",
        director: "Coen Brothers",
        year: 2001,
    },
];

router.get("/api/movies", (req, res) => {
    res.send({ data: eclipseMovies });
});

export default router;
