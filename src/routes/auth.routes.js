import express from 'express';
import { login, resetPassword } from '../controllers/auth.controller.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: 인증 관련 API
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: 로그인 (User 또는 Store)
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [user, store]
 *     responses:
 *       200:
 *         description: 로그인 성공, JWT 반환
 *       401:
 *         description: 인증 실패
 */
router.post('/login', login);


/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     description: 비밀번호 초기화
 *     tags: [Auth]
 *     summary: 비밀번호 초기화
 */
router.post('/reset-password', resetPassword);

export default router;
