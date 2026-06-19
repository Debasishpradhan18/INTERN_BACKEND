import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db.js";
import UserRouter from "./routes/user.route.js";
const app = express();
app.use(express.json());

app.use('/api/auth',UserRouter);


connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

