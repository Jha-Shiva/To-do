import express from 'express';
import { createTask, getTask, updateTask } from '../controllers/task.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/create', verifyToken, createTask);
router.put('/update/:taskId/:userId', verifyToken, updateTask);
router.get('/getTasks', verifyToken, getTask)

export default router;