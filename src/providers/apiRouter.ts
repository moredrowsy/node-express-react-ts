import express, { Router } from 'express';
import userRoute from '../routes/user.route';

const router: Router = express.Router();

// Register API routes
router.use('/user', userRoute);

export default router;
