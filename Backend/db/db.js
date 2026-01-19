import mongoose from "mongoose";
import coclors from 'colors'

const connectDb = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGOURI);
        console.log(`Database connected to ${mongoose.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Database error ${error}`.bgRed.white);
        process.exit(1);
    }
}

export default connectDb;