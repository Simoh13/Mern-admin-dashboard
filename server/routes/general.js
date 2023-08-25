import express from 'express'
import {getuser, getDashboardStats} from '../controllers/general.js'


const router = express.Router()

router.get('/user/:id',getuser);
router.get("/dashboard", getDashboardStats);

export default router;