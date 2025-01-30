import express from "express";
import connectDB from "./config/db.js";
import audiobookRoutes from "./routes/audiobookRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/audiobooks", audiobookRoutes);

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
