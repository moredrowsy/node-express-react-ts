import express, { Router } from 'express';
import userController from '../controllers/user.controller';

const router: Router = express.Router();

router.get('/', userController.index);
router.get('/username/:username', userController.showByUserName);
router.post('/', userController.index);
router.post('/username/:username', userController.showByUserName);

export default router;
