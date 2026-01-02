import express from 'express';
import { createTask, updateTask } from '../controllers/task.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/create',verifyToken, createTask);
router.post('/update', verifyToken, updateTask);

export default router;