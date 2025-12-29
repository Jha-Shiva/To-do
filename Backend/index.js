import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDb from './db/db.js';

// config dotenv
dotenv.config();

// config db
connectDb()

// config express
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res)=>{
    res.send('<h1>Hello Client</h1>')
});

app.listen(PORT,()=>{
    console.log(`Server is connected on localhost:${PORT}`.bgCyan.white);
})