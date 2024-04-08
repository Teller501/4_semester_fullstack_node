import express from "express";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
    res.send({ data: "Hello, World!" });
});

app.post("/", async (req, res) => {
    const email = req.body.email;

    const msg = {
        from: "onboarding@resend.dev",
        to: email,
        subject: "Hello World",
        html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    };

    const { data, error } = await resend.emails.send(msg);

    if (error) {
        console.error(error);
        return res.status(500).send({ data: "Error sending email" });
    }

    res.send({ data: "Email sent!" });
});

const PORT = process.env.PORT ?? 8080;
const server = app.listen(PORT, () =>
    console.log("Server is running on port", server.address().port)
);
