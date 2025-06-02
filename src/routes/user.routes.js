import express from 'express'
const router = express.Router()
import { protect } from '../middleware/auth.middleware.js'
import { createUser, getUserList, updateUser, deleteUser } from '../controllers/user.controller.js'


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 사용자 관리 API
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: 사용자 추가
 *     security:
 *       - bearerAuth: []
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 *               stores:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post('/', createUser);
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: 사용자 목록 조회
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', protect, getUserList);
/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: 사용자 정보 수정
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: 사용자 ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               name:
 *                 type: string
 *               password:
 *                 type: string
 */
router.put('/:id', protect, updateUser);
/**
 * @swagger
 * /api/users/by-username/{username}:
 *   delete:
 *     summary: 사용자 삭제 (username 기준)
 *     security:
 *       - bearerAuth: []
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         description: 삭제할 사용자 username
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 삭제 성공
 *       404:
 *         description: 사용자를 찾을 수 없음
 *       400:
 *         description: 잘못된 요청
 */
router.delete('/by-username/:username', protect, deleteUser);
export default router;
// import express from 'express';
// import { protect } from '../middleware/auth.middleware.js';
// import { createUser, getUserList, updateUser, deleteUser } from '../controllers/user.controller.js';
//