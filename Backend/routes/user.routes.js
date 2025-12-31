import express from 'express';
import { registerUsers, signInUser } from '../controllers/user.controllers.js';

const router = express.Router();

router.post('/register', registerUsers)
router.post('/signin', signInUser)

export default router;