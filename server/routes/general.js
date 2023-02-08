import express from 'express'
import {getuser} from '../controllers/general.js'


const router = express.Router()

router.get('/user/:id',getuser);

export default router;