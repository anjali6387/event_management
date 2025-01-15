import { Server } from "socket.io"; 
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        // origin: "http://localhost:5173", // Frontend URL
         origin: '*', // Frontend URL
        methods: ["GET", "POST"], // Allowed methods
        credentials: true, // Allow cookies and headers
      },
});

io.on("connection", (socket) => {
    console.log("A user connected ", socket.id);

    socket.on("disconnect", () => {
        console.log("A user disconnected ", socket.id);
    });
});

export { io, server, app };
