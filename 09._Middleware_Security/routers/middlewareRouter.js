import { Router } from "express";
const router = Router();

function greeter(req, res, next) {
    console.log("hello");
    next();
}

//middleware
function doorman(req, res, next) {
    if (req.query.secret?.toLowerCase() === "open sesame") {
        console.log("You are allowed to enter");
        next();
        return;
    }
    res.status(401).send({
        message: "You are not allowed to get into the room",
    });
}

router.get("/room", doorman, greeter, (req, res, next) => {
    console.log("you are in room 1");
    res.send({ data: "You are in room 1" });
    //next();
});

//inline middlware
router.get(
    "/room",
    (req, res, next) => {
        console.log("On to the next room... room 2 coming up!");
        next();
    },
    (req, res, next) => {
        res.send({ data: "You are in room 2" });
        next();
    }
);

export default router;