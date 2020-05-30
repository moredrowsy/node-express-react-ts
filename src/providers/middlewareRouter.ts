import express, { Router } from 'express';

const router: Router = express.Router();

// Register middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

export default router;
