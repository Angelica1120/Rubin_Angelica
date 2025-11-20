
import {Router} from 'express';
import { getAllUser, getUserById } from "../controllers/userController.js";

const router = Router();

router.get('/users', getAllUser);
router.get('/users/:id', getUserById);

export default router;
