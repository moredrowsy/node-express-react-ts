import bodyParser from 'body-parser';
import express, { Router } from 'express';

const router: Router = express.Router();

// Register middlewares
router.use(bodyParser.json()); // for POST params

export default router;
