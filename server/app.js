import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes); // ✅ ADD THIS

export default app;
