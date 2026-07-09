import mongoose from "mongoose";

const connectDB = async () => {
  try {
        console.log ("MONGODB_URI:",process.env.MONGODB_URI);

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("MongoDB Connected");
        console.log(mongoose.connection.readyState);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;