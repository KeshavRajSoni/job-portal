import mongoose from "mongoose";
import colors from 'colors'

const connnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONOGO_URI1);
        console.log("MongoDB Connected".bgBlue);
    } catch (error) {
        console.error(error.message);
    }
}

export default connnectDB;