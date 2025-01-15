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
// app.use(cors({origin: "http://localhost:5173/",credentials: true}));
const allowedOrigins = ['http://localhost:5173','https://event-management-ebon-zeta.vercel.app/'];
app.use(cors({
  origin: true, // Frontend origin
   methods: ["GET", "POST","PUT","DELETE"],
  credentials: true, // Allow cookies and headers
}));

app.use("/api/user", UserRoute);
app.use("/api/events", EventRoute);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname,'../Frontend/dist')));
//     app.get('*',(req,res) => {
//         res.sendFile(path.join(__dirname,"../Frontend","dist","index.html"));
//     })
// }

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});
