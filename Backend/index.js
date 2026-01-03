import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

// files import 
import connectDb from './db/db.js';

// routes import
import userRoutes from './routes/user.routes.js';
import taskRoutes from './routes/task.routes.js'
import cookieParser from 'cookie-parser';

// config dotenv
dotenv.config();

// config db
connectDb()

// config express
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

// middlewares
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/task', taskRoutes)

app.listen(PORT,()=>{
    console.log(`Server is connected on http://localhost:${PORT}`.bgCyan.white);
})