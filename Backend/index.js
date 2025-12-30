import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

// files import 
import connectDb from './db/db.js';

// routes import
import userRoutes from './routes/user.routes.js';

// config dotenv
dotenv.config();

// config db
connectDb()

// config express
const app = express();

// middlewares
app.use(express.json());

const PORT = process.env.PORT || 8080;

// app.get('/', (req, res)=>{
//     res.send('<h1>Hello Client</h1>')
// });

// middlewares
app.use('/api/v1/user', userRoutes)

app.listen(PORT,()=>{
    console.log(`Server is connected on http://localhost:${PORT}`.bgCyan.white);
})