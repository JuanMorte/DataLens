import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env'})

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;