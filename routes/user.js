import {getUser, signup} from '../controller/signupcontroller.js'
import express from 'express';
const router = express.Router();

router.post('/signup', signup);
router.get('/',getUser)

export default router;
