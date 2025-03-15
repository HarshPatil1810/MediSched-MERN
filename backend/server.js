import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url"; // Required for __dirname in ES Module

import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import adminRouter from "./routes/adminRoute.js";

// Setup __dirname in ES Module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to DB and Cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API Endpoints
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);

// Serve Admin Frontend
app.use("/admin", express.static(path.join(__dirname, "frontend", "admin", "build")));
app.get("/admin/*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "admin", "build", "index.html"));
});

// Serve User Frontend (Default Route)
app.use("/", express.static(path.join(__dirname, "frontend", "frontend", "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "frontend", "build", "index.html"));
});

// Start Server
app.listen(port, () => console.log(`Server started on PORT:${port}`));
