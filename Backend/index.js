import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./src/lib/db.js";
import UserRoute from "./src/routes/user.route.js";
import EventRoute from "./src/routes/event.route.js";
import { app,server } from "./src/lib/socket.js";
import path from "path";


dotenv.config();

const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(cookieParser());

// const allowedOrigins = ['http://localhost:5173','https://event-management-ebon-zeta.vercel.app/'];
// app.use(cors({
//   origin: true, // Frontend origin
//    methods: ["GET", "POST","PUT","DELETE"],
//   credentials: true, // Allow cookies and headers
// }));

// app.use(cors({
//   origin: '*', // Allow all origins
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allow custom headers
//   credentials: true, // Include credentials
// }));


app.use(cors({
  origin: true, // Frontend origin
  methods: ["GET", "POST","PUT","DELETE"], 
  credentials: true, 
}));


app.use("/api/user", UserRoute);
app.use("/api/events", EventRoute);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
