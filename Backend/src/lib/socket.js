import { Server } from "socket.io"; 
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        // origin: "http://localhost:5173", // Frontend URL
        origin: ['https://event-management-ebon-zeta.vercel.app'], // Frontend URL
        methods: ["GET", "POST"], // Allowed methods
    
      },
});

io.on("connection", (socket) => {
    console.log("A user connected ", socket.id);

    socket.on("disconnect", () => {
        console.log("A user disconnected ", socket.id);
    });
});

export { io, server, app };
