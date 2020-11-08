import express, { Router } from 'express';
import corsMiddleware from '../middlewares/corsMiddleware';

const router: Router = express.Router();

// Register middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(corsMiddleware);

export default router;
