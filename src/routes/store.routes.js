import express from 'express'
import { createStore, getAllStores, updateStore, deleteStore } from '../controllers/store.controller.js'

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Stores
 *   description: 가맹점 관리 API
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Store:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         storeId:
 *           type: string
 *         name:
 *           type: string
 *         owner:
 *           type: string
 *         phone:
 *           type: string
 *         address:
 *           type: string
 *         memo:
 *           type: string
 *         managers:
 *           type: array
 *           items:
 *             type: string
 *             description: User ObjectId
 *         status:
 *           type: string
 *           enum: [active, inactive, dormant, terminated]
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
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
 *                 $ref: '#/components/schemas/Store'
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
 *               managers:
 *                 type: array
 *                 items:
 *                   type: string
 *               status:
 *                 type: string
 *                 enum: [active, inactive, dormant, terminated]
 *     responses:
 *       201:
 *         description: 생성된 가맹점 정보 반환
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Store'
 */
router.post('/', createStore)

/**
 * @swagger
 * /api/stores/{id}:
 *   put:
 *     summary: 가맹점 정보 수정
 *     tags: [Stores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: 수정할 가맹점 ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
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
 *               managers:
 *                 type: array
 *                 items:
 *                   type: string
 *               status:
 *                 type: string
 *                 enum: [active, inactive, dormant, terminated]
 *     responses:
 *       200:
 *         description: 수정된 가맹점 정보 반환
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Store'
 */
router.put('/:id', updateStore)

/**
 * @swagger
 * /api/stores/{id}:
 *   delete:
 *     summary: 가맹점 삭제
 *     tags: [Stores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: 삭제할 가맹점 ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: 삭제 성공 메시지 반환
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Deleted
 */
router.delete('/:id', deleteStore)

export default router
