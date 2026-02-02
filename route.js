import express from 'express'
import { signUp, userLogin } from './controller.js'

const router = express.Router()

router.get("/login", userLogin)
router.get("/signup", signUp)

export default router
