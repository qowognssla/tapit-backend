import express from 'express'
import { createStore, getAllStores } from '../controllers/store.controller.js'

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Stores
 *   description: 가맹점 관리 API
 */

/**
 * @swagger
 * /api/stores:
 *   get:
 *     summary: 모든 가맹점 목록 조회
 *     tags: [Stores]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: 가맹점 목록 반환
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   storeId:
 *                     type: string
 *                   name:
 *                     type: string
 *                   owner:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   address:
 *                     type: string
 *                   memo:
 *                     type: string
 *                   status:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 */
router.get('/', getAllStores)

/**
 * @swagger
 * /api/stores:
 *   post:
 *     summary: 새 가맹점 추가
 *     tags: [Stores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - storeId
 *               - name
 *               - owner
 *               - password
 *             properties:
 *               storeId:
 *                 type: string
 *               name:
 *                 type: string
 *               owner:
 *                 type: string
 *               phone:
 *                 type: string
 *               address:
 *                 type: string
 *               memo:
 *                 type: string
 *               password:
 *                 type: string
 *                 example: tapit1234
 *     responses:
 *       201:
 *         description: 생성된 가맹점 정보 반환
 */
router.post('/', createStore)

export default router
