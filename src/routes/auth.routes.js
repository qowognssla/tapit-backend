import express from 'express'
import { login } from '../controllers/auth.controller.js'

const router = express.Router()

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: 사용자 로그인
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: 1234
 *     responses:
 *       200:
 *         description: JWT 토큰 반환
 *       401:
 *         description: 인증 실패
 */
router.post('/login', login)

export default router
