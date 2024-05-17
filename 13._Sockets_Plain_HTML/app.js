import express from "express";
const app = express();

app.use(express.static("public"));

import http from "http";
import { Server } from "socket.io";

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
    console.log("A socket connected", socket.id);

    socket.on("client-sends-color", (data) => {
        
        // sender til alle i io namespacet
        io.emit("server-sends-color", data);

        // sender til alle andre end sig selv
        socket.broadcast.emit("server-sends-color", data);

        // sender kun til sig selv
        // socket.emit("server-sends-color", data);
    });

    socket.on("disconnect", () => {
        console.log("A socked disconnected", socket.id)
    });
});

const PORT = process.env.PORT ?? 8080;
server.listen(PORT, () => console.log("Server is running on port", PORT));