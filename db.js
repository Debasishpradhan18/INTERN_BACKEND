import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully...");
    } catch (err) {
        console.log("Database connection failed:");
        
        console.log(err);
    }
};

export default connectDB;