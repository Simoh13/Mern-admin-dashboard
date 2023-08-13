import express from 'express'
import { getAdmins, getUserPerformance } from '../controllers/management.js';
import Transaction from '../models/Transaction.js';

const router = express.Router()

router.get("/admins",getAdmins)
router.get("/performance/:id",getUserPerformance)

export default router;