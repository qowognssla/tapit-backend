import express from 'express';
import { login, resetPassword } from '../controllers/auth.controller.js';

const router = express.Router();

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: 로그인 (User 또는 Store)
 */
router.post('/login', login);

/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     summary: 비밀번호 초기화
 */
router.post('/reset-password', resetPassword);

export default router;
