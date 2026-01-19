import express from 'express';
import { createTask, deleteTask, getTask, toggleTask, updateTask } from '../controllers/task.controllers.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const router = express.Router();

router.post('/create', verifyToken, createTask);
router.patch('/update/:taskId', verifyToken, updateTask);
router.patch('/update/:taskId/toggle', verifyToken, toggleTask);
router.get('/getTasks', verifyToken, getTask);
router.delete('/deleteTask/:taskId', verifyToken, deleteTask);

export default router;