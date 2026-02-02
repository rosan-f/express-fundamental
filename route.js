import express from 'express'
import { signUp, userDelete, userLogin, userPost, userPut } from './controller.js'

const router = express.Router()

router.get("/login", userLogin)
router.get("/signup", signUp)

router.post("/", userPost)
router.put("/:id", userPut )
router.delete("/:id", userDelete)

export default router
